require 'html-proofer'

namespace :test do
  desc 'Lint HTML of the generated static site'
  task :lint do
    options = {
      assume_extension: true,
      check_favicon: true,
      check_html: true,
      log_level: :debug,

      url_ignore: [
        # Known private links that returns 404, 403 or other specific code
      ]
    }

    HTMLProofer.check_directory('./_site', options).run
  end
end
