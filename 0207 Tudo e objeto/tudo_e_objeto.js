// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Vinícius';

nome.length; // 5
nome.charAt(1); // i
nome.replace('cius', 'cius Santos'); // Vinicius Santos (não muda a variável)
nome; // Vinícius

// Uma string herda propriedades e métodos do construtor 'String()'


/* Números */

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.


/* Funções */

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado) {
//    return lado * lado;
// }"

areaQuadrado.length; // 1  (retorna o total de argumento que a função tem)


/* Elementos dos DOM */

var btn = document.querySelector('button');

btn.classList.add('azul'); // Adiciona a classe azul 
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou');
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM