// Usando o operador spread (espalhar) que é representado por (...)
// Na prática copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas)

// Imutabilidade (não muda)
const bandas = ['Metallica', 'Guns n Roses', 'RHCP', 'Deep Purple'];
const maisbandas = [...bandas, 'Charlie Brown Jr', 'Mega Death'];

console.log(maisbandas);

console.log('======================');

// Spread com objeto
const dados = {
    nome:  'Viviane',
    idade: 21
};

const novosDados = {
    ...dados,
    cidade: 'São paulo',
    estado: 'SP',
    idade: 25 // sobrescrevendo o valor somente da propriedade idade
};

console.log(dados);
console.log(novosDados);
console.log(novosDados.idade);