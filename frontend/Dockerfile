# build React
FROM node:16.17.1
WORKDIR /app/frontend
COPY package.json ./
ENV CHOKIDAR_USEPOLLING=true
RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]