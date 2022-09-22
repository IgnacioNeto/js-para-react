/* Formas de trabalhar com funções */

// Sintaxe tradicional
function nomeDaFuncao() {
    console.log('Função de sintaxe tradicional...');
};

// Sintaxe de função anônima
var outraFuncao = function() {
    console.log('Outra forma de declarar função...');
};

// Chamada da função
nomeDaFuncao();
outraFuncao();

console.log('==========================');
// _________________________________________________________________________________

/* Crie uma função que receba 2 valores numéricos,
calcule a diferença entre eles e retorne o resultado
para uma variável externa */

function exercicio(valor1, valor2) {

    // let resultado = valor1 - valor2;
    // return resultado;

    return valor1 - valor2;
}

let resultado = exercicio(10,3);
console.log(resultado);

/* Arrow Function (função seta/ flecha)
Possibilita diversas sintaxes, e até simplificação */

const exemplo1 = () => {
    console.log('Uma arrow function qualquer...');

};

exemplo1();

// const ola = nome => { // podemos omitir os parênteses no caso de 1 parâmetro
// // const ola = (nome) => {
//     console.log('Olá' +nome);
// };

const ola = nome => console.log('Olá' +nome); // e as chaves nesta versão de função simplificada

ola(' Ignacio');

//_____________________________________________________________________

// const metade = (valor) => {
//     return valor / 2;
// };

// console.log( metade(100));

// Versão simplificada (Arrow function com retorno IMPLÍCITO)
const metade = valor => valor / 2;


console.log( metade(100));

//_____________________________________________________________________
console.log('==========================');

// const multiplicaValores = (valor, fator) => {
//     return valor * fator;
// };

// Versão simplificada (Arrow function com retorno IMPLÍCITO)
// const multiplicaValores = (valor, fator) => valor * fator;

// Parâmetro com valor padrão (fator = 2)
const multiplicaValores = (valor, fator = 2) => valor * fator;


console.log( multiplicaValores(10,3) );
// console.log( multiplicaValores(50,2) );
console.log( multiplicaValores(50) );

//_____________________________________________________________________
console.log('==========================');

/* Exercício 2
- Monte uma arrow function que receba um nome de pessoa e a converta para letras maiúsculas.
- Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados */

const converterMaiuscula = nome => nome.toUpperCase();

console.log( converterMaiuscula('ignacio'));
console.log( converterMaiuscula('thais'));
console.log( converterMaiuscula('vitoria'));