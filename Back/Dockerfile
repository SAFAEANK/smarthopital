FROM node:20

WORKDIR /app

COPY . .

RUN npm install --force

EXPOSE 5000

CMD ["npm", "run", "start:dev"]