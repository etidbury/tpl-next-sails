# Set the base image to Ubuntu
#ref https://medium.com/@adriendesbiaux/node-js-pm2-docker-docker-compose-devops-907dedd2b69a
FROM node:10.5.0-alpine

RUN npm set audit false
# Install PM2
RUN npm install -g pm2

# Install Yarn
RUN npm install -g yarn


RUN mkdir -p /var/www/

# Define working directory

WORKDIR /var/www/

ADD . /var/www/

#Ensure build is deleted/reset
RUN rm -rf /var/www/build

#Ensure node modules are deleted/reset
RUN rm -rf /var/www/node_modules/
RUN rm -rf /var/www/server/node_modules/

RUN yarn install --production --non-interactive


#SERVER SPECIFIC
WORKDIR /var/www/server



RUN yarn install --production --non-interactive

#explicitly install mocha (solution: https://discuss.circleci.com/t/node-js-npm-install-devdependencies/15551)
RUN npm install mocha
RUN yarn test

#RETURN
WORKDIR /var/www/

RUN yarn test

RUN npm run build



# Run app
CMD pm2 start --no-daemon /var/www/ecosystem.config.yml --env production --only cra-sails
