FROM node:8.9.1-alpine

WORKDIR /src
COPY ./app/package.json /src/package.json
COPY ./app/package-lock.json /src/package-lock.json
# Install nodemon globally
RUN npm install -g nodemon
RUN npm install
#ADD ./nodemon.json /src/nodemon.json

EXPOSE 3000
CMD ["npm", "start"]