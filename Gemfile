source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.1'

# If you need to upgrade/switch Bridgetown versions, change the line below
# and then run `bundle update bridgetown`
gem "bridgetown", "~> 1.1.0"

# Uncomment to add file-based dynamic routing to your project:
# gem "bridgetown-routes", "~> 1.1.0", group: :bridgetown_plugins

# Uncomment to use the Inspectors API to manipulate the output
# of your HTML or XML resources:
# gem "nokogiri", "~> 1.13"

# Puma is a Rack-compatible server used by Bridgetown
# (you can optionally limit this to the "development" group)
gem "puma"

group :test do
# Test rendered HTML files to make sure they are accurate
  gem 'html-proofer'
end
