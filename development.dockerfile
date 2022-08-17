FROM node:17.3.0-alpine3.14

RUN apk add --no-cache --virtual .gyp python3 make g++

# Install Doppler CLI
RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
    echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
    apk add doppler
ARG DOPPLER_TOKEN
ENV DOPPLER_TOKEN ${DOPPLER_TOKEN}

RUN doppler setup --project vault-gui --config lcl

WORKDIR /app

ENV NODE_ENV development
ENV NEXT_PUBLIC_ENV development
ENV NODE_OPTIONS=”–max_old_space_size=2048″
ENV NEXT_TELEMETRY_DISABLED 1

COPY --chown=node:node package.json yarn.lock .npmrc ./
RUN mkdir /app/.next
RUN chown -R node:node /app

USER node

RUN yarn install

EXPOSE 5000

# Run with Doppler
CMD ["doppler", "run", "--", "yarn", "dev"]
