FROM node:6.5.0-slim

RUN mkdir /code
WORKDIR /code

COPY ./ /code

RUN npm install -g gulp
RUN npm i && gulp build

EXPOSE 3000

CMD gulp serve
