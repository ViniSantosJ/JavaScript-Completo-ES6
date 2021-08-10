// Exercícios 

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
 /*Resposta -->  */ console.log(cor, marca, portas);
}


// console.log(var, marca, portas);


//Resposta: Pois dentro do console.log está tentando mostrar a variável 'var' que não existe.

// Trocando o 'var' por 'cor', com o intuito de sanar este erro, outros erros irão acontecer: Por usar const e let dentro de um escopo, eles não "vazam" para fora do escopo, sendo assim, ao tentar dar o console.log(cor, marca, portas); for do escopo, não será possível. O ideal é colocar essa função dentro do escopo.

/*_________________________________________________________ */



// Como corrigir o erro abaixo?

// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }

//Resposta: 

const dois = 2; // colocaria o const dois = 2 fora do escopo, para que a função 'dividirDois' tenha acesso. 

function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));




// O que fazer para total retornar 500?
// var numero = 50;

// for(var numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

//R: 

const numero = 50;

for(/* Resposta -->  */let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
