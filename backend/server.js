import express from 'express';
import data from './data.js';

//Template for Node server

const app = express(); //function that returns express app

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
