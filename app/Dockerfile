FROM node:latest

WORKDIR /usr/src/app


COPY package*.json .
RUN yarn 
COPY . .
RUN yarn build


EXPOSE $APP_PORT

CMD yarn start