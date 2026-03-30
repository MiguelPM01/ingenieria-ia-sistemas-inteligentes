/* Requisitos
- Hacer un programa que:
- Pida una hora
-La convierta con "Number(...)"
-Valide que sea número entero
-Valide que esté entre 0 y 23
- Si no cumple, mostrar:
    -Hora no válida
- Si cumple, mostrar: 
    -Hora válida */

const prompt = require('prompt-sync')();

const hora = Number(prompt('Ingrese la hora: '));

if (Number.isNaN(hora) || !Number.isInteger(hora) || hora < 0 || hora > 23) {
 console.log('Hora no válida');
} else {
    console.log('Hora válida');
}

