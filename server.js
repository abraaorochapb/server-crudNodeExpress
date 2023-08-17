const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

//CRUD - Create, Read, Update, Delete
//        POST   GET     PUT   DELETE

// https://meuapp.com <- GET -> acesso a minha aplicação
// https://meuapp.com/contato <- GET -> acesso aos contatos

app.listen(3000, () => {
  console.log('App listening on port 3000!')
  console.log('http://localhost:3000/')
})


