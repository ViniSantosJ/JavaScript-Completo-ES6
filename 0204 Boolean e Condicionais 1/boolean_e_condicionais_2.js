/*
Operadores lógicos &&

&& compara se uma expressão 'e' a outra é verdadeira.

Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os proximos. 

*/

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão' (retorna o valor)
(5 - 5) && (5 + 5); // 0 (pois zero é false)
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true


/* 
Operadores lógicos ||

|| Compara se uma expressão ou outra é verdadeira.

Retorna o primeiro valor true que encontrar.

*/

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true


/*
SWITCH

Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

*/

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


// Exercícios: 

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

//Resposta: 
var minhaIdade = 26;
var idadeParente = 30;

if (minhaIdade > idadeParente) {
  console.log('É maior.');
} else if (minhaIdade === idadeParente) {
  console.log('É igual.');
} else {
  console.log('É menor');
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(!!expressao);
// Resposta: true  ( 5 - ' ' = 5)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // True
var idade = 28; // True
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes.');
} else if (brasil === china) {
  console.log('Brasil tem o mesmo número de habitantes.')
} else {
  console.log('Brasil tem menos habitantes.')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// aparecerá Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Cão