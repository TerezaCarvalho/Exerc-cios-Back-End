// Rota: /btc/price

// Objetivo: Receber uma requisição com um token e verificar se ele está correto.
// O formato do token deve ser uma string de 12 caracteres contendo letras e números.
// Caso o formato do token esteja incorreto, devolva o erro como resposta invalid token.
// Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferencia
// e retorne os dados da API como resposta.
// (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json)
// O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8

const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const verifyToken = (token) => {
  const regexToken = /^(\d|\w){12}$/gm;
  return regexToken.test(token);
}

app.get('/btc/price', async(req, res) => {
  const token = req.headers.authorization;
  if(verifyToken(token)){
    const reqAxios = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json').then(({ data }) => data)
    return res.status(200).send(reqAxios)
  }
  return res.status(401).send("invalid token");
});


app.listen(3000, () => console.log("Amigo! tá ouvindo? SIM!"));
