const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productVenta = new Schema({
  id: ObjectId,
  nombre: String,
  producto: String,
  precio: float,
  fecha: Date
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});