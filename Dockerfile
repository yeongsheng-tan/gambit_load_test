FROM mhart/alpine-node:12
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./

RUN npm install -g npm yarn prettier eslint && npm install
COPY . .

ENTRYPOINT ["/usr/bin/npx", "ntl"]