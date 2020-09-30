const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const router = express.Router();

const readSimpsonsFile = async () => {
  const content = await fs.readFile(path.resolve(__dirname, '.', 'simpsons.json'));
  return JSON.parse(content.toString('utf-8'));
};

router.get('/', async (req, res) => {
  const result = await readSimpsonsFile();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const result = await readSimpsonsFile();
  const id = req.params.id;
  const filteredCharacter = result.find(character => character.id === id);
  res.status(200).send(filteredCharacter);
});

module.exports = router;

