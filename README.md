# Mern Authentication

## Configuration

### Configuration for client

Add your own MONGOURI in src/config.js

```
const config = {
    serverUrl: "Server URL"
}
```

### Configuration for server

* Add .env file in server folder 
* Add your own web port, session secret key and app environment in .env file

```
WEB_PORT= Your own web post
SESSION_SECRET= Your own session secret key
APP_ENV= Your development or local server
```

## Quick Start

### Install dependencies for client

```
npm install
npm start
```

### Install dependencies for server
Open new terminal

```
cd server && npm install
nodemon server.js
```

If you want clarity about project please pings me in basecamp