/* Programa que:
- Pida un número
- Valide que sea número entero
- Si no es válido, mostrar:
   -Entrada no válida
- Si es múltiplo de 5, mostrar:
    -Es múltiplo de 5
- Si no, mostrar:
    -No es múltiplo de 5 */

const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingresa un número: '));

if(Number.isNaN(numero) || !Number.isInteger(numero)) {
    console.log('Entrada no válida');
} else if (numero % 5 === 0){
    console.log('Es múltiplo de 5');
} else {
    console.log('No es múltiplo de 5');
}

