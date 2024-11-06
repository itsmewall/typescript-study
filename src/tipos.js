"use strict";
let nome = 'Wallace';
let idade = 22;
let adulto = true;
// array tipado
let numeros = [1, 2, 3, 4];
// tuplas
let pessoa = ["Wallace", 22, true];
// função tipada
function saudacao(nome) {
    return `Olá ${nome}`;
}
console.log(saudacao(nome));
console.log(`Idade: ${idade}`);
console.log(`Adulto: ${adulto}`);
console.log(`Números: ${numeros.join(', ')}`);
