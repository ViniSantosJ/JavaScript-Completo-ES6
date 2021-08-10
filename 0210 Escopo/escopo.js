/* Escopo de Função

Variáveis declaradas dentro  de funções não são acessadas fora das mesmas

*/

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // 'Fusca' no console.

try {
  console.log(carro); // Erro, carro is not defined  
} catch (erro) {
  console.log('Erro, carro is not defined!');
}


// Escopo evita conflito entre nomes



/* Variável Global (erro)

Declarar variáveis sem a palavra chave 'var', 'const' ou 'let', cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro.

*/

function mostrarCarro2() {
  carro2 = 'Fusion';
  console.log(carro2);
}

mostrarCarro2();
console.log(carro2); // Agora não dá erro, pois não definiu o 'carro2' como um 'var', 'const' ou 'let'

// 'use strict' impede isso. 


/* Escopo de Função (PAI)

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

*/

var carro3 = 'Corsa';

function mostrarCarro3() {
  var frase = `Meu carro é um ${carro3}`;
  console.log(frase);
}

mostrarCarro3(); // Meu carro é um Corsa
console.log(carro3); // Corsa




/* Escopo de Bloco (dentro das {})

Variáveis criadas com 'var', "vazam"" o bloco. Por isso, com a introdução do ES6, a melhor forma de declararmos uma variável é utilizando 'const' ou 'let', pois estas respeitam o escopo de bloco.

*/

if (true) {
  var carro4 = 'Fuscao';
  console.log(carro4); // Fuscao
}

console.log(carro4); // Fuscao

/*____________________________________________________________________________________*/

// Com 'let' ou 'const', a variável não "vaza".

if (true) {
  let /* ou 'const' */  carro5 = 'Gol';
  console.log(carro5); // Gol
}

try {
  console.log(carro5); // carro5 is not defined
} catch (error) {
  console.log('Carro5 is not defined')
}

/*____________________________________________________________________________________*/

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if (false) {
  var carro6 = 'Palio';
  console.log(carro6);
}

console.log(carro6); // Undefined

/*____________________________________________________________________________________*/

// Const e Let no lugar de Var

// A partir de agora, vamos utilizar apenas 'const' e 'let' para declararmos variáveis.

if (true) {
  const carro7 = 'Vectra';
  console.log(carro7);
}

try {
  console.log(carro7);
} catch (error) {
  console.log('Erro, carro7 is not defined')
}

/*____________________________________________________________________________________*/


//  {} cria um bloco

// Chaves '{}' criam um escopo de bloco, não confundir com a criação de objetos '= {}' 