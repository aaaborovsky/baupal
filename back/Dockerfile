FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ARG PORT
EXPOSE ${PORT:-3000}
ENTRYPOINT ["npm", "run"]
CMD ["start:prod"]