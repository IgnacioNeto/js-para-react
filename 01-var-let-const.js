/* Jeito antigo de usar variáveis */
// var meuNome = 'Ignacio';

/* Jeito moderno de usar variáveis */
// let meuNome = 'Ignacio';

// Se eu tiver certeza que nunca vai mudar (usar constante)
const meuNome = 'ignacio'; // const obriga a inicialização

console.log(meuNome);

console.log('==========================');

let idade = 20;
let mensagem; // Escopo global (Declarado fora do bloco)

if(idade = 20){
    // let mensagem = 'É maior de idade!';
    mensagem = 'É maior de idade!';
} else {
    // let mensagem = 'É menor de idade!';
    mensagem = 'É menor de idade!';
}

console.log(mensagem);

/* let e const: possuem escopo de bloco quando declarados
dentro de blocos (condicionais, loops) e escopo GLOBAL
quando declarados fora dos blocos */

/* var possue escopo global */