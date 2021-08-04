/* Objetos 

Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

*/

var pessoa = {
  nome: 'Vinícius',
  idade: 26,
  profissao: 'Programador',
  possuiFaculdade: true,
}

pessoa.nome; // 'Vinícius'
pessoa.possuiFaculdade; // true

// Propriedades e métodos consistem em nome (chave) e valor.



/*  Métodos

É uma propriedade que possui uma função no local do seu valor.

*/

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação da 'area: function() {}' para 'area() {}' no ES6+

var quadrado = {
  lados: 4, 
  area(lado) /* = area: function(lado) {}  */ {
    return lado * lado;
  },
  perimetro(lado) /* = perimetro: function(lado) {}*/ {
    return this.lados * lado;
  },
}

/* Organizaro Código

Objetos servem para organizar o código em pequenas partes reutilizáveis.

*/

Math.PI; // 3.14
Math.random(); // número aleaório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que 'console' é um objeto e 'log()' um método?