FROM ruby:3.1.1-slim
ARG RUBY_ENV=development
ARG NODE_ENV=development

# Define all the envs here
ENV RACK_ENV=$RUBY_ENV \
    NODE_ENV=$NODE_ENV \
    APP_HOME=/rubyconfth \
    PORT=4000 \
    LANG="en_US.UTF-8" \
    LC_ALL="en_US.UTF-8" \
    LANGUAGE="en_US:en"

ENV BUNDLE_JOBS=4 \
    BUNDLE_PATH="/bundle"

ENV NODE_VERSION="16"

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends apt-transport-https curl gnupg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Add the PPA (personal package archive) maintained by NodeSource
# This will have more up-to-date versions of Node.js than the official Debian repositories
RUN curl -sL https://deb.nodesource.com/setup_"$NODE_VERSION".x | bash -

# Install general required core packages, Node JS related packages and Chrome (testing)
RUN mkdir -p /usr/share/man/man1 && \
    apt-get update -qq && \
    apt-get install -y --no-install-recommends build-essential libpq-dev nodejs && \
    apt-get install -y --no-install-recommends rsync locales chrpath pkg-config libfreetype6 libfontconfig1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN sed -i "s/^#\ \+\(en_US.UTF-8\)/\1/" /etc/locale.gen && \
    locale-gen en_US.UTF-8

# Skip installing gem documentation
RUN mkdir -p /usr/local/etc \
	&& { \
    echo '---'; \
    echo ':update_sources: true'; \
    echo ':benchmark: false'; \
    echo ':backtrace: true'; \
    echo ':verbose: true'; \
    echo 'gem: --no-ri --no-rdoc'; \
    echo 'install: --no-document'; \
    echo 'update: --no-document'; \
	} >> /usr/local/etc/gemrc

WORKDIR $APP_HOME

COPY package.json package-lock.json ./
RUN npm install

# Only copy the dependency definition files (Gemfile and packages) to use Docker cache for these steps
# Install Ruby dependencies
COPY Gemfile* ./

RUN bundle config set jobs $BUNDLE_JOBS && \
    bundle config set path $BUNDLE_PATH && \
    bundle install

# Copying the app files must be placed after the dependencies setup
# since the app files always change thus cannot be cached
COPY . ./

# Make the init files executable
RUN chmod +x ./bin/*

# Build static site
RUN npm run esbuild \
     ./bin/bridgetown build

EXPOSE $PORT

CMD ./bin/bridgetown start
