const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log('Listening on port: ', port)
})