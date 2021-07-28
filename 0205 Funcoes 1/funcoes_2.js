/* E a função pode OU não retornar um valor.

Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

*/

function imc2(peso, altura) {
  var imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.90); // retornma o imc
console.log(imc2(80, 1.90)); // retorna o imc e undefined




/* Valores retornados.

Uma função pode retornar qualquer tipo de dado e até outras funções.

*/

function terceiraIdade(idade) {
  if(typeof idade !== 'number')
    return 'Informa sua idade!';
  else if(idade >= 60)
    return true;
  else
    return false;
}

console.log(terceiraIdade(69));

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.



/* Escopo

Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

*/

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar.`
}

// console.log(totalPaises); // erro, totalPaises não definido.


/* Escopo léxico

Funções conseguem acessar variáveis que foram criadas no contexto pai

*/

var profissao = 'Designer';

function dados() {
  var nome = 'Vinicius';
  var idade = 26;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 27;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'Vinicius, 27m Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro.


/* Hosting

Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

*/

imc3(80, 1.50); // irá funcionar, pois no inicio da execução, o JS "starta" as funções.

function imc3(peso, altura) {
  var imc = peso / (altura ** 2);
  console.log(imc + ' novo imc');
}