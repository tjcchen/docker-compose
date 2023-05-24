## docker-compose
A full stack project with frontend, backend and database modules.

## MongoDB
```sh
# run mongod as a service
Install: brew tap mongodb/brew
Start: brew services start mongodb-community
Stop: brew services stop mongodb-community

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
```

## License
This project is licensed under the terms of the MIT License.