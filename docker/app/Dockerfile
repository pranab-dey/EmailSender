FROM node:16.15.1-alpine

ARG APP_ENV
ENV NODE_ENV=${APP_ENV}

COPY ./src/package.json /var/www/package.json
COPY ./src/package-lock.json /var/www/package-lock.json

WORKDIR /var/www

# Install dependencies
RUN npm cache verify && rm -rf node_modules && npm install

COPY ./docker/app/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT [ "/usr/local/bin/entrypoint.sh"]

EXPOSE 3006