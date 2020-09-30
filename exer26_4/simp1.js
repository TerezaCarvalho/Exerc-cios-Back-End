// Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
const express = require('express');
const routeSimpsons = require('./routeSimpsons');
const app = express();

app.get('/simpsons', routeSimpsons);

app.get(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));