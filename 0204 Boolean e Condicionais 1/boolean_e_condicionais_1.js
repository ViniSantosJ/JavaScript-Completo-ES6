// Boolean = true ou false.

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação.');
} else {
  console.log("Não possui.");
}  

 /* Truthy e Falsy

Existem valores que retornam 'true' e outros que retornam 'false' quando verificados em uma expressão booleana.

*/

// Falsy

if(false);
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

// Truthy

if(true);
if(1);
if(' ');
if('Vinicius');
if(-5);
if({}); // objeto



/* Operador lógico de negação  "!"

O operador ! nega uma operação booleana. Ou seja. !true é igual a false.
*/

if(!true);  // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!'');  // false

// Dica: você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy.


/* Operadores de comparação

Vão sempre retornar um valor booleano.

*/

10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

/*
O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
*/

10 == '10';  //true
10 == 10; //true
10 === '10'; //false 
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true (estrito)