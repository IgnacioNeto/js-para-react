// Concatenação
const nome = "Ignacio";
const sobrenome = "A. da Cunha Neto";
let idade = 40;
let cidade = "São Paulo";
let estado = "SP";

/* Meu nome é: Ignacio A. da Cunha Neto, tenho 40 anos e moro atualmente na cidade de São Paulo - SP. */

let mensagem = "Meu nome é: "+nome+ " "+sobrenome+", tenho "+idade+" anos e moro atualmente na cidade de "+cidade+ " - "+estado+".";

console.log(mensagem);

//_____________________________________________________________________
console.log('==========================');

// Método template literal/string

// let mensagem2 = `Meu nome é <b class="teste"> ${nome.toUpperCase()} ${sobrenome} </b>, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}.`;

let mensagem2 = `Meu nome é <b class="teste"> ${nome.toUpperCase()} ${sobrenome} </b>, Sou ${idade >=18 ?'maior':'menor'} de idade.`;

console.log(mensagem2);
