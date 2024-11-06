let nome: string = 'Wallace';
let idade: number = 22;
let adulto: boolean = true;

// array tipado
let numeros: number[] = [1, 2, 3, 4];

// tuplas
let pessoa: [string, number, boolean] = ["Wallace", 22, true];

// função tipada
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

console.log(saudacao(nome));
console.log(`Idade: ${idade}`);
console.log(`Adulto: ${adulto}`);
console.log(`Números: ${numeros.join(', ')}`);
