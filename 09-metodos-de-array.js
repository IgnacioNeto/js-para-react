// 09-metodos-de-array.js
/* map (mapeia, transforma em outra coisa)
passa sobre elementos de um array e realiza operações neles
através de uma função (callback) gerando um novo array. */

const numeros = [10, 20, 30, 40, 50];

// Normal (Mais legível)
// const numerosDobrados = numeros.map( function(numero){
//     return numero * 2;
// });

// Com (arrow function) simplificada
const numerosDobrados = numeros.map( numero => numero * 2);

// Outra possibilidade (Chamando função dobra)
// const numerosDobrados = numeros.map(dobra);

// function dobra(valor) {
//     return valor * 2;
// }

console.log(numeros); // original
console.log(numerosDobrados); // transformado/mapeado

// ________________________________________________
console.log('======================');
// Ex. Criar um array e nomes e usar map para transformar em nomes maiusculos

const nomes = ['ignacio', 'maria', 'jessica', 'tais', 'jaime'];

const nomesMaiusculo = nomes.map( nome => nome.toUpperCase());

console.log(nomes); // original
console.log(nomesMaiusculo); // transformado/mapeado

// ___________________________________________________________________________
console.log('======================');

/* filter (filtra/remove)
Retorna um array de valores de acordo com o resultado do filtro aplicado */

// O JS aceita 10_000 para ficar mais legível
const vendas = [1500, 2000, 10_000, 1000, 500];
const meta = 1000;

const vendasAcimaDaMeta = vendas.filter(venda => venda > meta);

console.log(vendas);
console.log(vendasAcimaDaMeta);

console.log('======================');

const alunos = ['Marcelo', 'Matheus', 'Adriel', 'Palloma', 'Antonio', 'Rafael', 'Rodrigo'];


const resultados = alunos.filter(aluno => {
    // o 0 significa na 1ª posição (abaixo método mais antigo e depois atual)
    // if(aluno.charAt(0) == 'M'){
        if(aluno.startsWith('M')){
        return aluno;
    }
});

// Versão com (arrow function)
const result = alunos.filter( aluno => aluno.startsWith('M') ?? aluno);

console.log(alunos);
console.log('======================');
console.log(resultados);
console.log('======================');
console.log(result);

// ________________________________________________
console.log('======================');

const cursos = [
    {id:1, titulo: 'HTML5 e CSS3', categoria: 'Front-End', preco: 500},
    {id:2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    {id:3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    {id:4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    {id:5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    {id:6, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
];

// Trazer só cursos de Front-End
const cursosFront = cursos.filter( curso => curso.categoria == 'Front-End');
console.log(cursos);
console.log('======================');
console.log(cursosFront);

// Trazer so parte dos dados (titulo)
console.log('======================');
const titulos = cursos.map( curso => curso.titulo );
console.log(titulos);

console.log('======================');
// Trazer só parte dos dados (titulo da categoria Front-End)
const titulosFront = cursos
                        .filter(curso => curso.categoria == 'Front-End')
                        .map(curso => curso.titulo );
console.log(titulosFront);

// ___________________________________________________________________________
console.log('==========REDUCE============');

/* reduce (reduzir a um único valor/resultado) */ 

const valores = [10, 50, 2000, 5, 25];

const soma = valores.reduce( (acumulador, valor) => {
// o acumulador é o resultado da operação anterior
    return acumulador + valor
// 0 é o valor inicial
}, 0);

console.log(soma);

// ____________________________________________
console.log('==========FILTER e REDUCE============');

// Soma os valores da categoria (Mobile')
const somaCursosMobile = cursos
                            .filter( curso => curso.categoria == 'Mobile' )
                            .reduce((acumulador, curso) => {
                               return acumulador + curso.preco
                            }, 0) // valor inicial para o reduce

console.log(somaCursosMobile);