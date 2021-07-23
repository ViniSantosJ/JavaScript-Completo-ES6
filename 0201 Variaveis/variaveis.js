// Tipos de variaveis: var, let e const.

var
  nome = 'Vinicius',
  idade = 26,
  possuiFaculdade = true;

// alert(nome + " " + " " + idade + " " + possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado + preco;

var element = document.getElementById('js');

element.innerHTML = "<br>" + nome + " " + " " + idade + " " + possuiFaculdade + "</br>" + "<br>" + totalPreco + "</br>";


// Inválidos
// var @nome;
// var function;
// var 1possuiFaculdade;

// Válidos
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

/* É possível mudar os valores atribuídos a variáveis declaradas com 'var' e 'let'. Porém não é possível modificar valores das declaradas com 'const'.  */

/*--------------------------------------------------*/

// Declare variável com o seu nome
var nome = "Vinicius";
// Declare variável com a sua idade
var idade = 26;
// Declare variável com sua comida favorita sem atribuir valor
var comidaFavorita;
comidaFavorita = "Pizza";

// Declare 5 variáveis diferentes sem valores
var
  var1,
  var2,
  var3,
  var4,
  var5;