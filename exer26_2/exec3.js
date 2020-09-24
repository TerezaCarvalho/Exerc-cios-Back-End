/*
Exerício 3: Crie um script que, sem utilizar módulos de terceiros:

Pergunte ao usuário qual arquivo deseja ler.

Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não existe).

Escreva na tela o conteúdo do arquivo, a quantidade de bytes e o tempo gasto para ser lido.
*/

const fs = require('fs'); // para ler arquivoss
const path = require('path'); // módulo para trabalhar com arquivos e diretórios
const readline = require('readline'); // para ler o conteúdo do arquivo

const rl = readline.createInterface({ // criando interface de input e output
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual arquivo deseja ler ?', (answer) => { // o user vai digitar o nome e nao o caminho do arq
  fs.readFile(path.resolve(__dirname, answer), (err, data) => {
    if(err) {
      console.log("Arquivo inexistente");
    }
    rl.close();
    return console.log(data.toString()); //
  });
});

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });