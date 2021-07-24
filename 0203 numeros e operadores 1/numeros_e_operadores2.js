// A ordem importa
// Multiplicação e divisão, depois por soma e subtração. 

var total1 = 20 + 5 *2; // 30 
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50  (dessa forma, segue da esquerda pra direita)
var total4 = 10 + 10*2 + 20/2; // 40

// Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;

console.log(++incremento2); // 6
console.log(incremento2); // 6

// Mesma coisa para o decremento --valor


// O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é uma frase';
+frase; // NaN
-frase; // NaN

var idade = '28'; // (string)
+idade; // 28 (number)
-idade; // -28 (number)
console.log(+idade + 5); // 33
console.log(-idade + 5); // -23

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1 (false = 0; true = 1)


// Exercícios: 

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// Resposta: 35


// Crie duas expressões que retornem NaN
var n1 = 10
var s1 = 'oi';
var nan1 = n1 * s1;

var nan2  = (+s1);


// Somar a string '200' com o número 50 e retornar 250
var s200 = '200';
var n50 = 50;
var somaSN = +s200 + n50;


// Incremente o número 5 e retorne o seu valor incrementado
var increment5 = 5;
console.log(++increment5);


// Como dividir o peso por 2?
// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)


var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg' (string)
var pesoPorDois = peso;
console.log(pesoPorDois);