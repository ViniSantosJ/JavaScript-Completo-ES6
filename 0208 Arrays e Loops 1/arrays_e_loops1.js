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

for (var numero = 0; numero < 10; numero++) {
  console.log('Loop: ' + numero);
}

// Retorna de 0 a 9 no console.

// O for loop possui 3 partes: início; condição; incremento


/* While Loop */

var i = 0;

while (i < 10) {
  console.log('While: ' + i);
  i++;
}

// Retorna de 0 a 9 no console.

// O for loop é mais comum