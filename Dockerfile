FROM node:slim
WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm","run","start:prod"]