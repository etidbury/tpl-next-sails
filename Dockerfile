# Set the base image to Ubuntu
#ref https://medium.com/@adriendesbiaux/node-js-pm2-docker-docker-compose-devops-907dedd2b69a
FROM node:10.5.0-alpine
EXPOSE 80
ENV WORK_DIR /var/www/
ENV NODE_ENV production
ENV MYSQL_CONNECTION_URL mysql://demo-user:gwfLQPLzzAUTNGEUf8PnnnhcTtUXcj@firepit-uk.cd2zmqavz7jt.eu-west-2.rds.amazonaws.com:3306/demo-db

RUN npm set audit false
# Install PM2
RUN npm install -g pm2

# Install Yarn
RUN npm install -g yarn

# Install Tidil
RUN npm install -g tidil

RUN npm -v && node -v && yarn -v && tidil --version

RUN mkdir -p /var/www/

# Define working directory

WORKDIR /var/www/

ADD . /var/www/

#Ensure build is deleted/reset
RUN rm -rf /var/www/build
RUN rm -rf /var/www/.next

RUN npm ci
RUN yarn build

#SERVER SPECIFIC
WORKDIR /var/www/server

RUN npm ci
#explicitly install mocha (solution: https://discuss.circleci.com/t/node-js-npm-install-devdependencies/15551)
RUN yarn add mocha
RUN yarn test


#RETURN TO BASE FOR PM2 RELATIVE
WORKDIR /var/www/
RUN yarn test

#Rebuild for production environment (overriding test build)
RUN yarn build

# Run app
CMD pm2 start --no-daemon /var/www/ecosystem.config.yml --env production --only cra-sails
