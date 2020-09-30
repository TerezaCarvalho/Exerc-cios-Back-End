
const express = require ( 'express' )// Chama a função express para instanciar a aplicação do framework
const app = express () // e armazenar na variável app para ser utilizada no código

/* Ouve por requisições, utilizando o método GET, no caminho especificado */
app.get('/ping', function(req, res) {
  res.send({ "message": "Pong!" })
});
/* Ouve a porta 3000 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

