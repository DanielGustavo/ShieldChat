<h1 align="center">ShieldChat</h1>

![](./docs/shieldChatExample.gif)

# How to run the application

## Backend setup
1. Create a file `.env`
2. Copy what is inside `.env.example` and paste in `.env`;
3. Fill the empty fields

```
  APP_PORT=3333

  ## auth

  AUTH_SECRET='randomPassword'

  ## database

  DB_USER='DatabaseUser'
  DB_PASSWORD='DatabasePassword'
  DATABASE='DatabaseName'
  DB_HOST='localhost'
  DB_PORT=5432
  DB_TYPE='postgres'
```

4. Type `yarn` at bash to install the required packages
5. Type `yarn typeorm migration:run` to run all the migrations

## Frontend setup
1. type `yarn` at bash to install the required packages

## Start application
1. In backend folder, type `yarn dev` to start the server
2. In frontend folder, type `yarn start` 

# Tecnologies

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

# Author

<a href="https://github.com/DanielGustavo">
  <img style="border-radius: 50%; width: 100px" alt="Daniel Gustavo" src="https://avatars0.githubusercontent.com/u/51492635?v=4">
</a>

<p>Made by <a href="https://github.com/DanielGustavo"><b>Daniel Gustavo</b></a></p>

[![Gmail Badge](https://img.shields.io/badge/-danielgustavo5205@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:danielgustavo5205@gmail.com)](mailto:danielgustavo5205@gmail.com)