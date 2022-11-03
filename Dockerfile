FROM node:12-alpine
WORKDIR /nodejs-homework-rest-api
COPY . .
RUN npm install --production
CMD ["node", "/nodejs-homework-rest-api/server.js"]