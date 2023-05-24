## docker-compose
A docker project with frontend, backend and database modules

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

## License
This project is licensed under the terms of the MIT License.