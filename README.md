## docker-compose
A full stack project with frontend, backend and database modules.

## MongoDB
```sh
# run mongod as a service
install: brew tap mongodb/brew
start: brew services start mongodb-community
stop: brew services stop mongodb-community

# login locally
mongosh
mongosh "mongodb://localhost:27017"

# show databases
show dbs;

# use database1
use database1;

# show data tables;
show collections;
show tables;

# show table data
db.movies.find();
```

## Docker-Compose
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services. Then, with a single command, you create and start all the services from your configuration.

```sh
# build with docker-compose.yml file
docker-compose up

# check docker compose build arguments
docker-compose build --help

# build without cache( by default docker-compose will use cache )
docker-compose build --no-cache

# pull a newer version of the image
docker-compose build --pull

# docker-compose build( could build multiple images in one go )
docker-compose build

# image name explanations
folder / repository name + service name
docker-compose-frontend
docker-compose-backend
docker-compose-web
docker-compose-api

# starting and stoping the application

# check docker-compose up arguments
docker-compose up --help

# starting
docker-compose up

# build and up
docker-compose up --build

# in detached mode
docker-compose up -d

# check processes
docker-compose ps

# stoping( after running in detach mode )
docker-compose down

# docker networking

# when start a application, we can see a network is created by default
docker-compose up -d

# list all networks( current running network is `docker-compose_default` )
docker network ls

# ping other running containers/hosts inside a container
docker ps
docker exec -it -u root 380 sh
ping api   # succeeded( IP: 172.19.0.4 )
ping web   # succeeded( IP: 172.19.0.3 )
ping db    # succeeded( IP: 172.19.0.2 )
ifconfig   # check current network

# viewing the logs

# checking logs arguments
docker-compose logs --help

# list all logs
docker-compose logs

# check specific container logs, like web, db, api etc.( -f: in following mode )
docker ps
docker logs 393 -f

# publishing changes

# adding volumes config in our docker-compose.yml( under the service level ) 
volumes:
  - ./backend:/app

# migrating the database

# dependency - migrate-mongo
migrate-mongo up

# docker wait for DB container
command: ./wait-for db:27017 && migrate-mongo up && npm start
command: ./docker-entrypoint.sh

# remove unused volume
docker volume ls
docker volume rm docker-compose_vidly

# running automated tests

# frontend
web-tests:
  image: docker-compose-web
  volumes:
    - ./frontend:/app
  command: npm test
```

## Docker Deployment
```sh
# virtual private server options( VPS )
Digital Ocean
Google Cloud Platform
Microsoft Azure
Amazon Web Services( AWS )

# Install Docker Machine
Link: https://github.com/docker/machine/releases
docker-machine --version

# docker-machine commands
docker-machine ls
docker-machine rm -f <machinename>

# digitalocean setting
create api token: https://cloud.digitalocean.com/account/api/tokens?i=29ec06

# full commands of create digitalocean VPS( after creating, we can check the vps host from digitalocean website )
docker-machine create \
--driver digitalocean
--digitalocean-access-token <token> \
--digitalocean-image ubuntu-20-04-x64 \
--digitalocean-region sfo3 \
--engine-install-url "https://releases.rancher.com/install-docker/19.03.9.sh" \
yourMachineName

# docker swarm = docker cluster

# connecting to the Host

# using ssh( secure shell )
docker-machine ssh yourMachineName

# defining the production configuration

# define a docker-compose.prod.yml file for production
doc link: https://docs.docker.com/compose/compose-file/compose-file-v3/#restart
restart: unless-stopped

# reducing image size

# nginx config
doc link: https://hub.docker.com/_/nginx

# build frontend optimize image with Dockerfile.prod
inside frontend folder: docker build -t vidly_web_opt -f Dockerfile.prod .

# modify frontend config in docker-compose.prod.yml( build and port config )
services:
  web:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - 80:80
    restart: unless-stopped

# build with prod file with docker-compose
docker-compose -f docker-compose.prod.yml build

# deploying the application

# check digitalocean vps
docker-machine ls

# check environment variables
docker-machine env vidly

# configure your local shell:
eval $(docker-machine env vidly)

# use prod config compose
docker-compose -f docker-compose.prod.yml up -d

# [important] check why server isn't up by looking at logs
docker ps
docker logs 39dccb0087fd

# modify code and rebuild application
docker-compose -f docker-compose.prod.yml up -d --build

```

## License
This project is licensed under the terms of the MIT License.