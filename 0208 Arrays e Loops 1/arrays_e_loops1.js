/* Array

É um grupo de valores geralmente relacionados. Servem para guadarmos diferente valores em uma única variável.

*/

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0]; //Switch
videoGames[2]; // Xbox


// Métodos e Propriedades de uma Array

var videoGames = ['Switch', 'PS4', 'Xbox'];


videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
// Existem diversos outros métodos, como 'map', 'reduce', 'forEach' e mais, que veremos mais pra frente.


/* For Loop

Fazem algo repetidamente até que uma condição seja atingida.

*/

for (var numero = 0; numero < 3; numero++) {
  console.log('Loop: ' + numero);
}

// Retorna de 0 a 9 no console.

// O for loop possui 3 partes: início; condição; incremento


/* While Loop */

var i = 0;

while (i < 2) {
  console.log('While: ' + i);
  i++;
}

// Retorna de 0 a 9 no console.

// O for loop é mais comum



/* Arrays e Loops2 */

var videoGames= ['Switch', 'PS5', 'Xbox One', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}


/* Break

O loop irá parar caso encontre a palavra 'break'

*/

var videoGames= ['Switch', 'PS5', 'Xbox One', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS5') {
  console.log('Break');  
  break; 
  }
}



/* forEach

forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

*/

var frutas= ['Banana', 'Pêra', 'Uva', 'Abacaxi', 'Morango', 'Limao', 'Melancia', 'Kiwi'];

frutas.forEach(function(item) {
  console.log(item);
});

// O argumento 'item' será atribuído dinamicamente

// Podemos passar os seguintes parâmetros  'items', 'index' e 'array'

console.log('\n\n');

frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array);
})


/* Não se confuda coma Sintaxe */

var numero = 0;
var maximo = 10;

for (;numero < maximo;) {
  console.log(numero);
  numero++;
}