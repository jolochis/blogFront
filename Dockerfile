FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]
