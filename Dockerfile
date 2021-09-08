FROM docker.io/library/node@sha256:289a5e686ccfd79d2cf6e3cded8a5baae90eeb655e46c9c9213ac9dcd67ce3a0

ARG APP_TYPE
ARG APP_PORT
ENV APP_TYPE=$APP_TYPE

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install
COPY . .

EXPOSE $APP_PORT

CMD [ "node", "./bin/www" ]