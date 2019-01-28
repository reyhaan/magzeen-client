FROM mhart/alpine-node:10

EXPOSE 80 

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install --silent

CMD npm run start-prod