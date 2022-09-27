/* 08-desestruturação
Extrair dados facilmente de um array ou objeto e armazená-los em variáveis e constantes */

// Usando desestruturação com array
const[a,b] = ['Lucas', 'Vivian']

console.log(a);
console.log(b);

// _________________________
console.log('======================');

const alunos = ['Maria', 'Lúcia', 'kaio'];
const [maria, lúcia, kaio]= alunos;

console.log(maria);
console.log(lúcia);
console.log(kaio);

// _________________________
console.log('======================');

const unidades = ['Penha', 'Tatuapé', 'Itaquera', 'São Miguel Paulista'];
const[penha,tatuape,, smp] = unidades; // pulando Itaquera

console.log(penha);
console.log(tatuape);
console.log(smp);

// _________________________
console.log('======================');
// Usando desestruturação com objetos

const {nome, cidade}={nome:'Fulano', idade: 18, cidade: 'São Paulo'};
console.log(nome);
console.log(cidade);

const dados = {
    nome:'Guilherme',
    curso:'JavaScript',
    nascimento:'31/10/1998'
};

console.log('======================');

// Definindo um Alias (apelido) para nome (pois já tinha cido usado acima)
const {nome:aluno, curso}= dados;

console.log(aluno);
console.log(curso);
