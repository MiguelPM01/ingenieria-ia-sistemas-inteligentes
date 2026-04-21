/* Requisitos
- Hacer un programa que:
- Tenga un arreglo: [5, 8, 10, 3, 2]
- Pida al usuario un número
- Recorra el arreglo
- Si encuntra ese número, mostrar: "Número encontrado"
- Si no lo encuentra, mostrar: "Numero no encontrado" */

const prompt = require('prompt-sync')();
const numeros = [5, 8, 10, 3, 2];

const numero = Number(prompt('Ingrese un número: '));

let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] === numero) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log('Número encontrado');
} else {
    console.log('Número no encontrado');
}