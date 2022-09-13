<p align="center">
   Website for the <strong>Ruby Conference Thailand</strong>
</p>

<p align="center">
    <a href="https://app.netlify.com/sites/bangkokrb-rubyconfth/deploys"> <img src="https://api.netlify.com/api/v1/badges/3dbba728-8b59-40c4-b84e-66010ec3f0cf/deploy-status" alt="Deployment Status"></a>
</p>

---

## Get Started

### Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- ![ruby-version-image](https://img.shields.io/badge/ruby-3.1.1-brightgreen.svg) 
- ![node-version-image](https://img.shields.io/badge/node-16.14.0-brightgreen.svg)
- [Yarn](https://yarnpkg.com)

### Install

```sh
bundle install && yarn install
```

### Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme) or add some [plugins](https://www.bridgetownrb.com/plugins/) to get started quickly.

### Commands

```sh
# running locally
bin/bridgetown start

# build & deploy to production
bin/bridgetown deploy

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Managing Content

All content is written using [kramdown](https://kramdown.gettalong.org/) which is basically Markdown with the ability to use HTML tags. 

### Text Content

- Text content is stored in `src` into sub-directories. 
- Each file must contain a front-matter block at the beginning of the file with the config params `layout` and `page_class`:

```yaml
layout: default
page_class: home
```

### Assets

- Media used to enrich text content must be stored in `src/images/<media type>/<section-name>`. 
- In the case of using media other than images, prefer creating a new sub-directory e.g. `/videos/<section-name>` 
- To embed these media in the content, use the absolute path to each file: `/images/<media type>/<section-name>/<filename.extension>`

### Past Version

Past website versions are kept as Git submodules. So each website lives in its own repository.

In order to add a new past version, commit a compiled version of the site to a public repository and add a new submodule:

```
git submodule add https://github.com/bangkokrb/rubyconfth-2019.git ./src/past/2019
```

> Store all past version under the directory `./src/past`

In order to publish all past version, pull all submodules:

```
git submodule update --remote --recursive
```

> Use `git submodule update --init --recursive` when pulling for the first time after cloning this repository

## Contributing

Please see [CONTRIBUTING.md](/CONTRIBUTING.md).

## License

This project is 2018 and onwards bangkok.rb. It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

This project is maintained by bangkok.rb

