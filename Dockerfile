FROM node:18.18.2-alpine3.17

WORKDIR /bald/src/app 

COPY package*.json ./

COPY . .

EXPOSE 5000

CMD ["node" , "app.js"]
