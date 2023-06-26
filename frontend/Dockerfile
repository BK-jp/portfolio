# build React
FROM node:16.17.1 AS build
WORKDIR /app/frontend
COPY . .
RUN npm run build

FROM nginx
RUN rm -rf /etc/nginx/conf.d
RUN rm -rf /etc/nginx/nginx.conf
COPY conf /etc/nginx
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]