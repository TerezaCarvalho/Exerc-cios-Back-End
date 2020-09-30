/* 
Rota: /recipe/:id

Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. 
Caso o id fornecido não exista, retorne um erro recipe not found.
*/

const express = require('express');
const recipes = require('./data/recipes')
const app = express();

app.delete('/recipe/:id', (req, res) => {
  const { id } = req.params;
  const verifyID = recipes.find(recipe => id == recipe.id);
  !verifyID
    ? res.status(404).send("recipe not found.")
    : recipes.splice(recipes.indexOf(verifyID), 1) && res.status(200).send(verifyID);
  });


app.listen(3000, () => console.log("escutando!"));