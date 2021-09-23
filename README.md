# Docker Crud Backend

This repo is an example to orchestrate NodeJS with MongoDB using docker-compose. It also has a seeder script.

- Clone this repo
- Run `docker-compose up --build --remove-orphans -d` 
- wait till the containers are running
- open `https://localhost` to see the app
- Every time you change the code, you need to run `docker-compose up --build --remove-orphans -d` to rebuild the containers