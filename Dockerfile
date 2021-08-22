FROM tbcp/nodejs:debian

USER bootcamp

RUN git config submodule.recurse true

WORKDIR /home/bootcamp/

RUN sudo yarn global add webpack webpack-cli webpack-bundle-analyzer typescript --prefix /usr/local

RUN sudo yarn global add web-ext docsify-cli@latest --prefix /usr/local

COPY ./package.json /home/bootcamp/

RUN yarn install

COPY . /home/bootcamp/

CMD [ "docsify", "serve", "." ]
