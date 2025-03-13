# some parts are taken from https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM nginx:1.26.3-alpine as default_nginx

EXPOSE 80
ENV NGINX_HTTP_PORT=80
RUN rm -rf /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf




FROM node:18-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install --no-fund --no-audit




FROM node:18-alpine as build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build



FROM node:18-alpine as runtime_next
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=build /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]



FROM default_nginx as prod_nginx_with_front_static

EXPOSE 443
EXPOSE 80
ENV SSL_DEPLOYED_TO_DOMAIN="10111897.xyz"
# if prod.nginx.template.conf changed and app/build didn't then we chaply copy .conf
# if build changed we do rebuild and cheaply update conf
# COPY --from=build /app/build /usr/share/nginx/html/
COPY ./prod.nginx.template.conf /etc/nginx/templates/nginx.conf.template
# If we swap 2 copy instructions it will be bad because on every .conf change we will do full rebuild.
# Full rebuild experienced as much more expensive than unnoticable copying a single little file every time build changes
