// 10-async-await
import fetch from 'node-fetch';


// Trabalhando com a comunicação assíncrona (ajax)
// Pegar na internet (Digitar no google: json placeholder)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json() )
    .then(dados => console.log(dados) )
    .catch( error => console.log('Erro na operação: '+error.errno) );

//_____________________________________________________________________
console.log('======================');

/* Sintaxe usando função e async/await */
// async function acessaApi(){ // Tradicional
const acessaApi = async () => { // Com arrow function
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error){
        console.log('Deu ruim' +error.errno);

    }
}

acessaApi();