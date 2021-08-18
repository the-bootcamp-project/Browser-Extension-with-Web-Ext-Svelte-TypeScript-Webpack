FROM node:latest

RUN apt update && apt upgrade -y && apt install -y \
  git \
  gcc \
  make \
  cmake \
  python3 \
  python3-pip \
  xsel

WORKDIR /home/node/

RUN yarn global add node-gyp web-ext webpack webpack-cli webpack-bundle-analyzer typescript concurrently --prefix /usr/local

# COPY ./package.json /home/node/

RUN yarn install

COPY . /home/node/
