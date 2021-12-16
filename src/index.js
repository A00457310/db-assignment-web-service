const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const UserService = require('../services/user-service');
const AddressService = require('../services/address-service');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/user', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.send(users);
});

app.post('/user', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.send(users);
});

app.get('/address', async (req, res) => {
    const address = await AddressService.getAllAddresses();
    res.send(address);
});

// starting the server
app.listen(3004, () => {
  console.log('listening on port 3004');
});