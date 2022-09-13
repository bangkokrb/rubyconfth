require 'html-proofer'

namespace :test do
  desc 'Lint HTML of the generated static site'
  task :lint do
    options = {
      error_sort: :status,
      log_level: :debug,
      enforce_https: false,

      # List of checkers to execute
      check_favicon: true,
      check_html: true,
      check_img_http: true,
      check_opengraph: true,

      # Known private links that returns 404 or 403
      ignore_urls: [
        /angel.co/,
        /go-jek.com/,
        /icelab.com.au/,
        /matestack.org/
      ]
    }

    HTMLProofer.check_directory('./output', options).run
  end
end
