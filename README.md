# Website for <strong>Ruby Conference Thailand</strong>

Hosted at https://rubyconfth.com/

This is a completely static HTML and CSS site, stored in the `public/` subfolder.

Pushes to the `develop` branch of this repo deploy directly to Cloudflare pages and should go live within a minute.

Please open pull requests to make changes rather than directly pushing to `develop`.

### Past Version

Past website versions are kept as Git submodules. So each website lives in its own repository.

In order to add a new past version, commit a compiled version of the site to a public repository and add a new submodule:

```
git submodule add https://github.com/bangkokrb/rubyconfth-2019.git ./public/past/2019
```

> Store all past version under the directory `./public/past`

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

