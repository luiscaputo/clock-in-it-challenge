FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./


RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "./dist/src/main.js" ]