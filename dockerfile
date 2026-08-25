FROM node:24-alpine AS runtime
WORKDIR /blog
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./dist ./dist

EXPOSE 3000
ENTRYPOINT ["node", "./dist/server/entry.mjs"]
CMD []
