// Todos são primitivos, exceto os objetivos.

var nome = 'Vinicius'; // String
var idade = 26; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Objetct

// Primitivos são dados imutáveis. 

// Verificando de que tipo a variável é com a função typeof

console.log(typeof nome); // retorna string

/* _____________________________________________________ */

// Concatenando strings

var nome = 'Vinicius';
var sobrenome = 'Santos';
var nomeCompleto = nome + ' ' + sobrenome; // forma simples de concatenação.
console.log(nomeCompleto);

// *Pode usar aspas duplas ou simples.*

var nome = 'Vinicius';
var sobrenome = 'Santos'; 
var idade = 26;
var nomeCompleto = nome + ' ' + sobrenome; // forma simples de concatenação.
var frase = `Meu nome é: ${nomeCompleto} e tenho ${idade} anos.`; // Template String

console.log(frase);

// Exercícios: 

// Declare uma variável contendo uma string
var string = 'String';

// Declare uma variável contendo um número dentro de uma string
var numeroString = '28';

// Declare uma variável com a sua idade
var idade = 26;

// Declare duas variáveis, uma com seu nome
var nome = 'Vinícius'
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Santos';
var nomeCompleto = `${nome} ${sobrenome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time ';

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;


console.log(string);
console.log(numeroString);
console.log(idade);
console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);
console.log(frase);
console.log(typeof verificarTipoNome);