/* Requisitos
Programa que:
- Pida un número
- Valide que sea un número entero
- Si no es válido, mostrar:
    -Entrada no válida
-Si es divisible entre 3 y 5, mostrar:
    -Divisible entre 3 y 5
-Si solo es divisible entre 3, mostrar:
    -Divisible entre 3
-Si solo es divisible entre 5, mostrar:
    -Divisible entre 5
-Si no es divisible entre ninguno, mostrar:
    -No es divisble entre 3 ni 5 */

const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingrese un número: '));

if (Number.isNaN(numero) || !Number.isInteger(numero)) {
    console.log('Entrada no válida');
} else if( numero % 3 === 0 && numero % 5 === 0) {
    console.log('Divisible entre 3 y 5');
} else if( numero % 3 === 0) {
    console.log('Divisible entre 3');
} else if(numero % 5 === 0) {
    console.log('Divisible entre 5');
} else {
    console.log('No es divisible entre 3 ni 5');
}

