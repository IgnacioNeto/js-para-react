class Pessoa {

    // Propriedade
    nome = 'sem nome';
    genero = 'não informado';
    idade;

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }
    mostraNome() {
        console.log( this.nome );
    }
    verificaIdade() {
        
        // if( this.idade >= 18){
        //     return 'é maior';

        // } else {
        //     return 'é menor';
        // } 

        // Outra maneira de fazer (usando ternário)
        return this.idade >=18 ? 'é maior' : 'é menor';

    }
}

// Traz tudo da classe mãe (Pessoa) + as particularidades da classe (Aluno)
class Aluno extends Pessoa {
    // Propriedades
    matricula;
    curso;

    // Métodos
    mostraDados() {
        console.log( this.matricula );
        console.log( this.curso );

        // Metodos da super classe
        this.mostraNome();
        this.mostraGenero();

    }


}

//_________
// Criando objetos/ instâncias

let umaPessoa = new Pessoa;
umaPessoa.nome = 'Ignacio';
umaPessoa.genero = 'masculino';

console.log(umaPessoa);

//_________

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Maria';

console.log(outraPessoa);

// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Vitória';
aluno.genero = 'feminino';
aluno.matricula = '123abc';
aluno.curso = 'JS para React';

aluno.idade = 25;
console.log(aluno.nome);
console.log(aluno.idade);

console.log(
    aluno.verificaIdade()
);


// Console.log(aluno)
aluno.mostraDados();


