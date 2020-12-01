FROM node:15.3.0-alpine

WORKDIR /usr/app

COPY package.json .

RUN yarn

EXPOSE 3333

CMD [ "yarn", "dev" ]
