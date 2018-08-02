const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const sc = require('./storeController');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.get('/api/products', sc.getAllProducts)
app.get('/api/product/:id', sc.getSingleProduct)
// app.put(/*write me */)
// app.post(/*write me */)
// app.delete(/*write me */)

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log('Listening on port: ', port)
})