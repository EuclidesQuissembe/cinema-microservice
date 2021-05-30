FROM node:15-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 5000

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD [ "nodemon", "bin/www" ]