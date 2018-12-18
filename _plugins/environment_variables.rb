# Plugin to add environment variables to the `site` object in Liquid templates
require 'dotenv'

module Jekyll
  class EnvironmentVariablesGenerator < Generator
    priority :highest

    def generate(site)
      site.config['env'] = Dotenv.load

      Jekyll.logger.info 'Dotenv variables: '
      Jekyll.logger.info site.config['env'].to_yaml
    end
  end
end
