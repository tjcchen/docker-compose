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

```

## License
This project is licensed under the terms of the MIT License.