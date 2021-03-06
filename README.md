# Mern Authentication

## Configuration

### Configuration for client

Add your own MONGOURI in src/config.js

```
const config = {
    serverUrl: "Server URL",
    displayData: [
        { 
            transactionID: Any Name,
            mailID: Any Mail Id,
            paymentID: Payment ID,
            dueAmount: Due Amount,
            transactionDate: Transaction Date,
            status: Status,
            paymentDueDate: Payment Due Date,
            totalAmount: Total Amount
        }
    ]
}
```

### Configuration for server

* Add .env file in server folder 
* Add your own web port, session secret key and app environment in .env file
* Don't forget to first do the setting - [Allow less secure apps to access account in gmail](https://myaccount.google.com/lesssecureapps?rapt=AEjHL4OAyG5d1mzHCsK1TciWG3fekRUsfrWd-ifalqrla8lC-8l0iY9NOXcUv5v6VBJqPCbJpah0oUsNMDpswyD0kOcJ2yJJGQ).

```
WEB_PORT= Your own web post (example 3000)
SESSION_SECRET= Your own session secret key
APP_ENV= Your development or local server
Email_Id= Enter your mail id
password= Enter your password
```

## Quick Start

Before that install [yarn](https://yarnpkg.com/getting-started/install) in your system.

### Install dependencies for client

```
yarn install
npm start
```

### Install dependencies for server
Open new terminal

```
cd server && yarn install
nodemon server.js
```
