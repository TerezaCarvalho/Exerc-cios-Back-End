/* 
Rotas: /posts/:id e /posts

Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id.
Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem
id not found.. A rota /posts deve trazer todos os posts cadastrados.
*/

const express = require('express');
const post = require('./data/posts');

const app = express();

app.use(express.json());

app.get('/posts', (req, res) => {
  res.status(200).send(post);
});

app.post('/posts/:id', (req, res) => {
  const { id } = req.params; // params são as chaves q tem na url
  const verificarID = post.find(p => p.id == id);
  if (verificarID) return res.status(200).send(verificarID);
  return res.status(404).send('id not found');
});

app.listen(3000, () => console.log("Ouvindo? sim! "));
