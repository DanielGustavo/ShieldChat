<h1 align="center">

![ShieldChat](./docs/logo.svg)
</h1>

![](./docs/shieldChatExample.gif)

# Table of contents
<!--ts-->
* [Prerequisites](#Prerequisites)
* [How to run the application](#How-to-run-the-application)
    * [Backend setup](#Backend-setup)
    * [Frontend setup](#Frontend-setup)
    * [Start application](#Start-application)
* [Tecnologies](#Tecnologies)
* [Author](#Author)
<!--te-->

# Prerequisites
Before starting, you're gonna need to have [Docker](https://www.docker.com/get-started) (v19.03.0+) installed on your machine. Besides that, a text editor like [VSCode](https://code.visualstudio.com/) is recommended.

# How to run the application

## Backend setup
1. Create a file `.env`
2. Copy what is inside `.env.example` and paste in `.env`;
3. If necessary, change the fields ***(Probably you won't have to do this, just if you want to)***
4. Open the terminal at the backend folder and type the command bellow to build the backend's and the database's containers:
    ```bash
    > docker-compose up --build -d
    ```
5. Run all the migrations:
    ```bash
    > docker exec -it shieldchat_backend yarn typeorm migration:run
    ```
6. Watch the backend's logs:
    ```bash
    > docker logs -f shieldchat_backend
    ```

## Frontend setup
1. Open the terminal at the frontend folder and type the command bellow to install the required packages:
    ```bash
    > yarn
    ```

## Start application
1. To start the backend, you have to setup the containers first. Once they're configured, start the **shieldchat_db** container, then the **shieldchat_backend**:
    ```bash
    > docker start shieldchat_db
    ```
    ```bash
    > docker start shieldchat_backend
    ```
2. In frontend folder, type the command bellow:
    ```bash
    > yarn start
    ```

# Tecnologies

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

# Author

<a href="https://github.com/DanielGustavo">
  <img width=100 alt="Daniel Gustavo" src="https://avatars0.githubusercontent.com/u/51492635?v=4">
</a>

<p>Made by <a href="https://github.com/DanielGustavo"><b>Daniel Gustavo</b></a></p>

[![Gmail Badge](https://img.shields.io/badge/-danielgustavo5205@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:danielgustavo5205@gmail.com)](mailto:danielgustavo5205@gmail.com)
