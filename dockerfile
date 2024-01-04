From node:16.17.0-alpine3.16
RUN addgroup app && adduser -S -G app app
WORKDIR /app
copy package*.json .
RUN npm install
copy . .
EXPOSE 3000
CMD ["npm", "start"]