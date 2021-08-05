/* Exercícios */

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Santos',
  idade: 26,
  vacinado: true,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function() {  
  return this.nome + ' ' + this.sobrenome;
}

console.log(pessoa.nomeCompleto() + '!');

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: '10',
  late(tipo) {
    if(tipo === 'homem')
      return 'sim.';
    else 
      return 'não late.';
  },
};

console.log('Raça: ' + cachorro.raca + 
            ', \nCor: ' + cachorro.cor + 
            ', \nIdade: ' + cachorro.idade + 
            ', \nLate ao ver homem: ' + cachorro.late('homem'));
