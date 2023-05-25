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

```

## License
This project is licensed under the terms of the MIT License.