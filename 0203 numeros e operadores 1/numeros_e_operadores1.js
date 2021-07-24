// Exemplos números

var idade = 18;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// Operadores Aritméticos 

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200 
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16  (2*2*2*2)
var modulo =  14 % 5; // 4 (resto da divisão)

// Ao tentar "somar" um número com uma string, estará concatenando. (Só a soma tem poder de concatenação)
var soma = '100' + 50; // 10050 (String)
var subtracao = '100' - 50; // 50 (a subtracao consegue conversar a string em numero, quando possível)
var multiplicacao = '100' * '2'; // 200  (a multiplicação consegue conversar a string em numero, quando possível)
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)  (a divisão consegue converter, mas quando dentro da string não tem somente número, retorna NaN)

// É possível verificar se uma variável é NaN ou não com a função isNaN()

console.log(isNaN(divisao));

if (isNaN(divisao)) {
  console.log('A variavel divisao não pode ser completada.');
}