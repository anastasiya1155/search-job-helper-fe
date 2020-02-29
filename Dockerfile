FROM node:10
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . ./
RUN yarn build
CMD ["node", "server.js"]
