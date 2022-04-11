FROM node:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .

ENV AUTH_OKTA_ISSUER=__AUTH_OKTA_ISSUER_VALUE__
ENV AUTH_OKTA_CLIENT_ID=__AUTH_OKTA_CLIENT_ID_VALUE__

EXPOSE 3000
CMD ["npm", "start"]