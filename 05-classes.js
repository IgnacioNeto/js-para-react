class Pessoa {

    // Propriedade
    nome = 'sem nome';
    genero = 'não informado';

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }
    mostraNome() {
        console.log( this.nome );
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

// Console.log(aluno)
aluno.mostraDados();
