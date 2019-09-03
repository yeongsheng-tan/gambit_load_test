FROM node:12
WORKDIR /app
COPY package*.json ./

RUN npm install -g npm yarn prettier eslint && npm install
COPY . .

ENTRYPOINT ["npx ntl"]