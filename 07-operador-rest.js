/* 07-operador-rest
Usamos para mesclar uma lista de argumentos/ parâmetros para uma função */

function ordenar( ...parametros ){
    return parametros.sort();
} 

console.log( ordenar('Jair', 'Larissa', 'Andrea') );

console.log( ordenar('RHCP', 'Mega Death', 'Metallica', 'Rush', 'Pink Floyd') );

// _________________________

console.log('======================');

const cursos = ['React', 'Angular', 'Vue', 'JS', 'Node.JS','PH','SQL'];

console.log(cursos);
console.log( ordenar(...cursos) ); // Spread (para evitar array dentro de array)

// _________________________

console.log('======================');

function soma(...valores){
    let total = 0;

    for(let valor of valores) {
        total += valor;
    }
    return total;
}

// Obs só é possível fazer a função com diferentes qtds de valores por conta do (...) spread na função
console.log( soma(10,20) );
console.log( soma(5, 3, 35, 55, 10,20) );

// _________________________
// Exercício: Transforme as funções acima em arrow function

const testeOrdenar = ( ...parametros ) => parametros.sort();


console.log( testeOrdenar('Jair', 'Larissa', 'Andrea') );

console.log( testeOrdenar('RHCP', 'Mega Death', 'Metallica', 'Rush', 'Pink Floyd') );

// _________________________
console.log('======================');

const somaValores = (...valores) => {
    let total = 0;

    for(let valor of valores) {
        total += valor;
    }
    return total;
}
console.log( somaValores(10,20) );
console.log( somaValores(5, 3, 35, 55, 10,20) );
