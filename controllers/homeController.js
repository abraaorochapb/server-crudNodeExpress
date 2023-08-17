exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
    <label for="email">Email:</label>
    <input type="text" name="email">
    <input type="submit">
  </form>
  `)
}

exports.postEmail = (req, res) => {
  console.log(req.body)
  res.send(`Email enviado : ${req.body.email}`)
}