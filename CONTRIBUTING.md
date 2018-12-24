# How to contribute

We love pull requests from everyone.

Here are some ways *you* can contribute:

* by reporting bugs
* by suggesting new features
* by writing or editing documentation
* by refactoring code
* by closing [issues][https://github.com/bangkokrb/rubyconfth/issues]

## Submitting an Issue

* We use the [GitHub issue tracker](https://github.com/bangkokrb/rubyconfth/issues) to track bugs and features.
* Before submitting a bug report or feature request, check to make sure it hasn't already been submitted.
* When submitting a bug report, please include any details that may be necessary to reproduce the bug, including
  your gem version, Ruby version, and operating system.
  
## Submitting a Pull Request

1. Push your code to a topic branch. We use the [standard git flow](https://guides.github.com/introduction/flow/) with 
feature, chore and bug branches so name the branch accordingly.
2. [Submit a pull request](https://help.github.com/articles/using-pull-requests/) by setting the `development` branch as destination.
3. Fill in the PR description following the [PR template](https://github.com/bangkokrb/rubyconfth/blob/master/.github/PULL_REQUEST_TEMPLATE.md) sections.
4. Once submitted, the test suite will run for the branch automatically.
4. Request for a code review from on the reviewer

## Releasing a new version

1. Checkout a release branch from the `development` branch. Naming for the branch must follow the pattern `release/<version number>` e.g. `release/1.0.0`.
2. Open a pull request with the release branch as origin and the `master` branch as destination.
3. Once the pull request is approved and / or the test suite has run successfully, merge the release branch.
4. Add a git tag for the version e.g. `git tag -a 1.0.0` with releases notes when entering the interactive mode.
5. Push newly added tag to the remote with `git push --tags`.
