FROM node:18

WORKDIR /src/app-sensores-ionic

COPY package*.json ./

RUN npm install -g @ionic/cli @angular-devkit/build-angular && npm install

EXPOSE 8100