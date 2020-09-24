/* 
Exercício 1: Crie uma função que retorna uma promise:

Essa função deve receber 3 parâmetros, fazendo o tratamento de erro caso algum dos
parâmetros não seja um número.
Caso algum dos parâmetros não seja do tipo Number rejeite a promise e imprima na tela a frase "Digite apenas números".
Caso todos os parâmetros sejam do tipo Number você deve somar os dois primeiros.
Depois pegue o resultado da soma e multiplique pelo terceiro parâmetro e caso seja menor que 50,
rejeite a promise com a mensagem "Valor muito baixo".
Caso contrário, aceite a promise imprimindo o resultado da multiplicação na tela.

*/

const retornaPromise = (a, b, c) => {
  return new Promise((resolve, reject) => { // a promise é uma function
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(console.error("Digite apenas números"));
    }
    resolve(a+b);
  })
  .then((soma) => {
    if(soma * c < 50) {
      return Promise.reject(new Error("Valor muito baixo")) // aqui é outra promisse
      // criando uma promise de rejeiçao. (tenho que criar outra promisse pq já usou um reject lá em cima)
    }
    return console.log(soma * c);
  });
}
retornaPromise(7, 1, 1);

// com async await
const retornaPromise = async(a, b, c) => {
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return Promise.reject(console.error("Digite apenas números"));
  }
  const soma = a + b;
  if( soma * c < 50) {
    return Promise.reject(new Error("Valor muito baixo"))
  }  
  return console.log(soma * c);
}

retornaPromise(7, 1, 100);


