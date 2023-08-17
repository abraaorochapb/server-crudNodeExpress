const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('App listening on port 3000!')
  console.log('http://localhost:3000/')
})

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
    <label for="email">Email:</label>
    <input type="text" name="email">
    <input type="submit">
  </form>`);
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`Email enviado : ${req.body.email}`);
})

app.get('/testes/:id?', (req, res) => {
  console.log(req.params)
  res.send('teste')
})