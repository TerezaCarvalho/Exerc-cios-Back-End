// Rota: /user/:name

// Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos
// por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found..

const express = require('express');
const users = require('./data/users');

const app = express();
app.use(express.json());

app.get('/user/:name', (req, res) => {
  const { name } = req.params; // params são as chaves q tem na url
  const verifyUser = users.find(({user}) => name === user);
  if(!verifyUser) return res.status(500).send("user not found..");
  return res.status(200).json({ comments: verifyUser.comments });
});


app.listen(3000, () => console.log("Estou ouvindo!"));
