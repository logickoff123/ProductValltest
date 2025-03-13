FROM nginx:1.26.3-alpine as default_nginx

EXPOSE 80
ENV NGINX_HTTP_PORT=80
RUN rm -rf /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf


FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM default_nginx as prod_nginx_with_front_static

EXPOSE 443
ENV NGINX_HTTPS_PORT=443
ENV SSL_DEPLOYED_TO_DOMAIN="10111897.xyz"
# if prod.nginx.template.conf changed and app/build didn't then we chaply copy .conf
# if build changed we do rebuild and cheaply update conf
COPY --from=build /app/build /usr/share/nginx/html/
COPY ./prod.nginx.template.conf /etc/nginx/templates/nginx.conf.template
# If we swap 2 copy instructions it will be bad because on every .conf change we will do full rebuild.
# Full rebuild experienced as much more expensive than unnoticable copying a single little file every time build changes
