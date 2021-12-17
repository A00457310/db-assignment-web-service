const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const UserService = require('../services/user-service');
const AddressService = require('../services/address-service');
const BusDelayService = require('../services/bus-delay-service');
const FrequentAddressService = require('../services/frequent-address');

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
    const users = await UserService.createUser(req.body);
    res.send(users);
});

app.get('/address', async (req, res) => {
    const address = await AddressService.getAllAddresses();
    res.send(address);
});


app.post('/address', async (req, res) => {
  const address = await AddressService.createAddress(req.body);
  res.send(address);
});

app.get('/bus-delay', async (req, res) => {
    const busDelays = await BusDelayService.getAllBusDelays();
    res.send(busDelays);
});

app.get('/frequent-address', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllFrequentAddresses();
    res.send(frequentAddresses);
});

app.get('/hazard', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllHazards();
    res.send(frequentAddresses);
});

app.get('/obstruction', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllObstructions();
    res.send(frequentAddresses);
});

app.get('/query', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllQueries();
    res.send(frequentAddresses);
});

app.get('/response', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllResponses();
    res.send(frequentAddresses);
});

app.get('/transit-issue', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllTransitIssues();
    res.send(frequentAddresses);
});

app.get('/user-query', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllUserQuery();
    res.send(frequentAddresses);
});

app.get('/user-response', async (req, res) => {
    const frequentAddresses = await FrequentAddressService.getAllUserReponse();
    res.send(frequentAddresses);
});

app.get('/user-transit-issue', async (req, res) => {
  const frequentAddresses = await FrequentAddressService.getAllUserTransitIssue();
  res.send(frequentAddresses);
});

app.get('/stat1', async (req, res) => {
  const frequentAddresses = await FrequentAddressService.getStat1();
  res.send(frequentAddresses);
});

// starting the server
app.listen(3004, () => {
  console.log('listening on port 3004');
});