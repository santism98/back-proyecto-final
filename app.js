/**
 * Express module
 * @const
 */
const express = require("express");

/**
 * Cross-origin resource sharing module
 * @const
 */
const cors = require('cors');

/**
 * Loads environment variables from a .env file
 * @const
 */
require('dotenv').config();

//CONFIGURATIONS

/**
 * Creates an instance of Express
 * @type {object}
 * @const
 */
const app = express();

/**
 * Port to listen to for incoming requests
 * @type {number|string}
 * @const
 */
const port = process.env.PORT;

/**
 * Cross-origin resource sharing middleware
 */
app.use(cors());

/**
 * Parses incoming requests with urlencoded payloads
 */
app.use(express.urlencoded({ extended: false }));

/**
 * Parses incoming requests with JSON payloads
 */
app.use(express.json());

/**
 * Routers module for river data
 * @const
 */
const routerRiverData = require('./routers/routerRiverData');

/**
 * Routers module for user data
 * @const
 */
const routerUser = require('./routers/routerUser');

// ROUTES

/**
 * Middleware for handling incoming requests to river data endpoints
 */
app.use('/', routerRiverData);

/**
 * Middleware for handling incoming requests to user data endpoints
 */
app.use('/user', routerUser);

// LISTENER

/**
 * Starts the server and listens on the specified port
 */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
