FROM node:10
COPY package.json package-lock.json ./
RUN npm install --production
COPY . ./
RUN npm run build
CMD ["node", "server.js"]
