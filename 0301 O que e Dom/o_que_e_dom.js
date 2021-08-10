/* Document Object Model (DOM)

É uma interface que representa documentos HTML e XML através de objetos. Com ela, é possível manipular a estrutura, estilo e conteúdo destes documentos.

*/

console.log(window);

// Window é o objeto 'global' do browser, possui diferentes métodos e propriedade.

window.innerHeight; // retorna a altura do browser.


// Ao inspeciona elemento com o Chrome, você está vendo a representação oficial do DOM.


/* window e Document

São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

*/

window.alert('Isso é um alerta.');
alert('Isso é outro alerta!'); // Funciona

const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// window é o objeto global, por isso não precisamos chamá-lo na frente dos seus métodos e propriedades.

/* __________________________________________________________*/


/* Node

Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

*/

const titulo = document.querySelector('h1');
const tituloClasses = titulo.classList;

titulo.innerText; // retorna o texto.
titulo.classList; // retorna as classes.
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click', function(){
  alert('Voce clicou no título!!');
}); // ativa a função callback ao clicar no título

// ou 

function callbackh1() {
  console.log('Clicou em ' + titulo.innerText);
}

titulo.addEventListener('click', callbackh1);