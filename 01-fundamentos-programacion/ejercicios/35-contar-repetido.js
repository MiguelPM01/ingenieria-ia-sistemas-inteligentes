/* Requisitos
- Hacer un programa que:
- Tenga un arreglo: [5, 8, 5, 3, 5, 2]
- Pida al usuario un número
- Recorra el arreglo
- Cuente cuántas veces aparece ese número
- muestre algo como: "El número aparece 3 veces" */

const prompt = require('prompt-sync')();
const numeros = [5, 8, 5, 3, 5, 2];

const numero = Number(prompt('Ingrese un número: '));

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] = numero ){
        contador++;
    }
}

if (contador > 0) {
    console.log(`El número aparece ${contador} veces`);
} else {
    console.log('El número no aparece en el arreglo');
}

