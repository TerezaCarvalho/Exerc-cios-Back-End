/* 
Rota: /:operacao/:numero1/:numero2

Objetivo: Deve validar a operação e retornar o resultado da mesma.
As operações podem ser soma, subtração, divisão ou multiplicação.
Regra: Um middleware deve ser usado para cada operação. A operação deve ser
recebida como parâmetro na rota.
*/

const express = require('express');
const app = express();

app.use(express.json());

app.get('/:operacao/:numero1/:numero2', (req, res) => {
  const { operacao, numero1, numero2 } = (req.params); // params são as chaves q tem na url
  let result;
  switch (operacao) {
    case 'soma':
      result = parseInt(numero1) + parseInt(numero2);
      res.status(200).json(result);
      break;

    case 'subtração':
      result = parseInt(numero1) - parseInt(numero2);
      res.status(200).json(result);
      break;

    case 'divisão':
      result = parseInt(numero1) / parseInt(numero2);
      res.status(200).json(result);
      break;

    case 'multiplicação':
      result = parseInt(numero1) * parseInt(numero2);
      res.status(200).json(result);
      break;

    default:
      res.status(400).json('invalid operation');
      break;
  }
});

app.listen(3000, () => console.log("Abre a porta mariquinha!!"))
