source 'https://rubygems.org'
ruby '2.5.3'

# Jekyll and its dependencies
gem 'jekyll', '3.8.5'

group :development, :test do
  gem 'rake'        # A make-like build utility for Ruby. Required to run tests.
  gem 'dotenv'      # A Ruby gem to load environment variables from `.env`
  gem 'foreman'     # Manage Procfile-based applications
  gem 's3_website'  # Deployment to S3
end

group :test do
  gem 'html-proofer'
end
