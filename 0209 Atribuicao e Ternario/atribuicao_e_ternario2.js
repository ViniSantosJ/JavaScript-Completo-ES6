// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

console.log('O novo valor de scroll é: ' + (scroll += 500));

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;


console.log(darCredito = ((possuiCasa && possuiCarro) ? 'True, possui casa e carro' : 'False, não possui casa e carro'));

// ou 

console.log(darCredito = (possuiCasa && possuiCarro));
