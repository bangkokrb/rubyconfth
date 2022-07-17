<p align="center">
   Website for the <strong>Ruby Conference Thailand</strong>
</p>

<p align="center">
    <a href="https://app.netlify.com/sites/bangkokrb-rubyconfth/deploys"> <img src="https://api.netlify.com/api/v1/badges/3dbba728-8b59-40c4-b84e-66010ec3f0cf/deploy-status" alt="Deployment Status"></a>
</p>

---

## Get Started

### Using Docker and Docker Compose

This is the fastest way to get started working on Compass:

* Rename the env file `.env.sample` to `.env` and add the required environment variables

* Build the image locally and start the application:

```shell
./bin/docker-start
```

The container is running in development mode by default, making the application reachable at `http://localhost:4000`.

### Without Docker a.k.a the legacy way

* Make sure that you have ![ruby-version-image](https://img.shields.io/badge/ruby-3.1.1-brightgreen.svg) and ![node-version-image](https://img.shields.io/badge/node-16.14.0-brightgreen.svg)

* Install dependencies

```shell
bundle install
npm install
```

* Use Jekyll to serve the website locally (by default, at `http://localhost:4100`):

```shell
./bin/start
```

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

### Past Version

Past website versions are kept as Git submodules. So each website lives in its own repository.

In order to add a new past version, commit a compiled version of the site to a public repository and add a new submodule:

```
git submodule add https://github.com/bangkokrb/rubyconfth-2019.git ./past/2019
```

> Store all past version under the directory `./past`

In order to publish all past version, pull all submodules:

```
git submodule update --remote --recursive
```

> Use `git submodule update --init --recursive` when pulling for the first time after cloning this repository

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

## Deployment to Netlify

* Setup the Docker image locally: `./bin/setup`

* Publish the latest changes to Netlify: `./bin/deploy`

> .env.docker is used to load the environment variables from the local environment `docker run --rm --entrypoint '/bin/bash' --env-file .env.docker -it rubyconfth`

## Contributing

Please see [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

This project is 2018 and onwards bangkok.rb. It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

This project is maintained by bangkok.rb
