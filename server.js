'use strict';

const express = require('express');
const app1 = require('./app');
const cors = require('cors');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser);

app.get('/', async (req, res) => {
  const person = await app1.test();

  res.send(person);
});

app.post('/', async (req, res) => {
  console.log(req.body.name);
  await app1.addPerson(req.body.name);

  res.send({message: "success"});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);