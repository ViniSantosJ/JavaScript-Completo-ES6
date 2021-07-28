/* Funções

Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

*/

function areaQuadrado (lado) { // funciont declaration (declaração de uma função)
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4


function pi() { // função que só retorna um valor, sem ter parâmetros
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi()); // executa a função
console.log(pi); // exibe a função propriamente dita
console.log(total); // exibindo uma variável que armazena a multiplicação de um numero normal com o return da função.

//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.


function imc(peso, altura) {
  return imc = peso / (altura * altura); 
}

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também.

console.log(imc(80, 1.8));

/* Parênteses executa a função */

function corFavorita(cor) {
  if(cor === 'azul')
    return 'Eu gosto do céu.';
  else if(cor === 'verde')
    return 'Eu gosto de mato';
  else
    return 'Eu não gosto de cores.';
}

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer.

console.log(corFavorita('verde'));



/* Argumentos podem ser funções

Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

*/

addEventListener('click', function() {
  console.log('clicou');
})

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é um função anônima