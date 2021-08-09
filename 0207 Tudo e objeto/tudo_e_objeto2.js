/* Exercícios */

// nomeie 3 propriedades ou métodos de strings

// Lenght
// toString
// charAt


// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('button');

// addEventListener
// appendChild
// id
// innerHtml
// outerHtml
console.log(btn);



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function copyToClipBoard() {
  var content = document.getElementById('textArea');

  content.select();
  document.execCommand('copy');

  alert('Copiado');
}