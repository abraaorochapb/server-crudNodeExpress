exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.postEmail = (req, res) => {
  console.log(req.body)
  res.send(`Email enviado : ${req.body.email}`)
}