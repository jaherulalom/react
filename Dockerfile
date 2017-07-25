FROM node:6-alpine

ENV PORT=9090
ENV API_ENDPOINT=http://localhost:8080
ENV ENVIRONMENT=dev

WORKDIR /var/app
RUN apk add --update curl # Used for healthcheck instruction

COPY package.json ./
RUN npm install --production --silent

COPY server.js ./
COPY build/ ./build/

EXPOSE $PORT

CMD node server.js
