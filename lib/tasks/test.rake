require 'html-proofer'

namespace :test do
  desc 'Lint HTML of the generated static site'
  task :lint do
    options = {
      assume_extension: true,
      error_sort: :status,
      log_level: :debug,

      # List of checkers to execute
      check_favicon: true,
      check_html: true,
      check_img_http: true,
      check_opengraph: true,

      # Known private links that returns 404, 403 or other specific error codes
      url_ignore: [
        'https://angel.co/'
      ]
    }

    HTMLProofer.check_directory('./_site', options).run
  end
end
