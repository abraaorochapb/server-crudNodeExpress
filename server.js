const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('App listening on port 3000!')
  console.log('http://localhost:3000/')
})