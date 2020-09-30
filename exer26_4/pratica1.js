/* 
Atividade 1:
Rota: /login

Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta.
O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter 
o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. 
Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem 
de erro email or password is incorrect. e seu devido status code.
*/


const express = require('express');
const crypto = require('crypto');// pct usado para gerar o token aleatório

const app = express();

app.use(express.json());

function verifyEmail(email) {
  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;;
  return emailRegex.test(email); // retorna false or true
}
function verifypassword(password) {
  const passwordRegex = /^\d{4,8}$/gm;
  return passwordRegex.test(password);
}

app.post('/login', (req, res) => { // só de ter que passar(email e senha) algo precisamos do post
  const { email, password } = req.body;
  const emailIsValid = verifyEmail(email);
  const passwordIsValid = verifypassword(password);
  if (emailIsValid && passwordIsValid) {
    const token = crypto.randomBytes(6).toString('hex');
    return res.status(200).json({ token });
  } else {
    return res.status(401).json('email or password is incorrect.');
  }
});

app.listen(3000, () => console.log("Ouvindo na porta 3000!"));
