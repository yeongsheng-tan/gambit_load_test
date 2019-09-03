FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./

RUN npm install -g npm yarn prettier eslint && npm install
COPY . .

ENTRYPOINT ["npx ntl"]