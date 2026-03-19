const prompt = require('prompt-sync')();

let n1 = Number(prompt('Escribe el primer número: '));
let n2 = Number(prompt('Escribe el segundo número: '));

let resultado = n1 + n2;

console.log(`El resultado de la suma es: ${resultado}`);
