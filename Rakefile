require "bridgetown"
require 'html-proofer'

Bridgetown.load_tasks

# Run rake without specifying any command to execute a deploy build by default.
task default: :deploy

#
# Standard set of tasks, which you can customize if you wish:
#
desc "Build the Bridgetown site for deployment"
task :deploy => [:clean, "frontend:build"] do
  Bridgetown::Commands::Build.start
end

desc "Build the site in a test environment"
task :test do
  ENV["BRIDGETOWN_ENV"] = "test"
  Bridgetown::Commands::Build.start
end

desc "Runs the clean command"
task :clean do
  Bridgetown::Commands::Clean.start
end

namespace :frontend do
  desc "Build the frontend with esbuild for deployment"
  task :build do
    sh "yarn run esbuild"
  end

  desc "Watch the frontend with esbuild during development"
  task :dev do
    sh "yarn run esbuild-dev"
  rescue Interrupt
  end
end

# Custom tasks

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
        /matestack.org/,
        /rubyconfindia.org/
      ]
    }

    HTMLProofer.check_directory('./output', options).run
  end
end

