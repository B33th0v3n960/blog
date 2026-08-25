FROM node:24-alpine AS builder
WORKDIR /blog
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine AS runtime
WORKDIR /blog
COPY --from=builder /blog/dist ./dist
COPY --from=builder /blog/node_modules ./node_modules

EXPOSE 3000
ENTRYPOINT ["node", "./dist/server/entry.mjs"]
CMD []
