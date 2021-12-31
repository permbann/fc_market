FROM node:lts as dependencies
WORKDIR /clan_market
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /clan_market
COPY . .
COPY --from=dependencies /clan_market/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /clan_market
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /clan_market/next.config.js .
COPY --from=builder /clan_market/public ./public
COPY --from=builder /clan_market/.next ./.next
COPY --from=builder /clan_market/node_modules ./node_modules
COPY --from=builder /clan_market/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]