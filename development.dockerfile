FROM node:17.3.0-alpine3.14

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

CMD ["yarn", "dev"]
