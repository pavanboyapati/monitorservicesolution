# base image
FROM node:12

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install --production --silent && mv node_modules ../
RUN npm install react-scripts@3.0.1 -g --silent

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000