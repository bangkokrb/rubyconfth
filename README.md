<p align="center">
   Website for the <strong>Ruby Conference Thailand</strong>
</p>

<p align="center">
    <a href='https://semaphoreci.com/nimble/rubyconfth'> <img src='https://semaphoreci.com/api/v1/nimble/rubyconfth/branches/master/badge.svg' alt='Build Status'></a>
</p>

---

## Get Started

### Using Docker

This is the fastest way to get started working on the website:

* Rename the env file `.env.sample` to `.env` and add the required environment variables

* Build the image locally and create a container for the application: 

```shell
./bin/setup
```

* Start the container:

```shell
./bin/start
```

The container is running in development mode by default making the application reachable at `http://localhost:4000`.

> `./bin/log` can be used to see the output of the Jekyll server. This is useful to check if the content is regenerated 
properly inside the Docker container.

### Without Docker a.k.a the legacy way 😢

* Make sure that you have Ruby `2.5.3` and Node.JS > `8.6.0`

* Install dependencies

```shell
bundle install
npm install
```

* Use Jekyll to serve the website locally (by default, at `http://localhost:5000`):

```shell
$ bundle exec jekyll serve --config ./_config.yml [--incremental]
$ open http://localhost:5000/
```

* Compile assets using Webpack: 

```shell
npm run start
```

> During development, both jekyll and webpack processes need to be started. To make this easier, foreman has been 
configured in the project: `foreman start -f Procfile.dev`

## Managing Content

All content is written using [kramdown](https://kramdown.gettalong.org/) which is basically Markdown with the ability to use HTML tags. 

### Text Content

* Text content is stored in `_pages` into sub-directories. No content must be placed in the root of `_pages`.
* File names must be kebab-cased (hyphenated delimited) corresponding to an entry in the navigation (see below) 
* Each file must be written in markdown and have an `.md` extension as Jekyll converts markdown files into HTML
* Each file must contain a front-matter block at the beginning of the file with the config params `id` and `title`:

```yaml
id: about
title: About
```

In case of a sub-level page (i.e. not in the root directory), the front-matter block needs to include a config `parent` matching the parent page `id`:

```yaml
id: about-team
title: Team
parent: about
```

### Navigation

The navigation is generated from the data stored in `_data/menu/header.yml` and `_data/menu/footer.yml`:

* Each pages contains a `title`, `slug` and `sub-pages`
* The `slug` and `sub-pages` need to be kebab-cased as these strings are used to generate URLs
* The `slug` corresponds to the page or sub-directory in `pages`

Example:

```yaml
- title: Section Name
  slug: section-name
  sub-pages:
  - sub-section-item
  - another-sub-section-item
```

Corresponding to the following file structure:

```ascii
.
+-- _pages
|   +-- section-name.md
|   +-- section-name/
|   |   +-- sub-section-item.md
|   |   +-- another-sub-section-item.md
```

> Note: Note more than two-node sub-navigation (section -> sub-pages) is currently supported in either the partials 
`_includes/header.html` or  `_includes/footer.html`. The files can be edited to add deeper levels navigation.

### Assets

* Media used to enrich text content must be stored in `assets/<media type>/pages/<section-name>`. 
* In the case of using media other than images, prefer creating a new sub-directory e.g. `assets/videos/pages/<section-name>` 
* To embed these media in the content, use the absolute path to each file: `/assets/<media type>/pages/<section-name>/<filename.extension>`

## Testing

As a static site grows to tens of hundreds of pages, broken links or HTML could easily make its way to a number of pages. 
To prevent this issue, we use [HTMLProofer](https://github.com/gjtorikian/html-proofer).

### Using Docker

Include this in your CI / CD pipeline:

```shell
docker run --rm --entrypoint '/bin/bash' -it $DOCKER_IMAGE:$BRANCH_TAG -c 'bundle exec rake test:lint'
```

### Without Docker

Run this locally or your CI / CD pipeline:

```shell
bundle exec rake test:lint
```

## Deployment to S3 (optional)

* Setup the Docker image locally: `./bin/setup`

* Publish the latest changes to S3: `./bin/deploy`

> .env.docker is used to load the environment variables from the local environment `docker run --rm --entrypoint '/bin/bash' --env-file .env.docker -it rubyconfth`

## Troubleshooting

* When not using the Docker setup, `s3_website` currently does not work on the latest Java versions 9/10. It's necessary 
to have the previous version 8 installed.
  
How to install multiple versions of Java on Mac:

1. Install [jenv](http://www.jenv.be/)
2. Install Java 8 using `homebrew` and `cask`: `brew cask install caskroom/versions/java8`
3. In the app directory, set the local version to java 8: `jenv local 8.0`

* Deploy commands outputs "There was nothing to push":

In most cases, the gem `s3_website` outputs this message when changes to the assets have been performed but not on the 
markdown files. In this case, `s3_website push --force` will push all content.

## Contributing

Please see [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

This project is Copyright (c) 2018-2019 bangkok.rb. It is free software,
and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

This project is maintained by bangkok.rb
