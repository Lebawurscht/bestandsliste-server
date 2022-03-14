FROM node:lts

RUN mkdir /bestandsliste
WORKDIR /bestandsliste

COPY . .

RUN yarn; \
  yarn compile;

RUN git clone https://github.com/Lebawurscht/bestandsliste-client.git client; \
  cd client; yarn; yarn build; cp -r dist ../web; cd ..; rm -r client;

EXPOSE 80

ENTRYPOINT ["node", "dist/index.js"]