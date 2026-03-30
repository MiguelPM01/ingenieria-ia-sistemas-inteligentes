/* Requisitos 
Hacer un programa que:
- Pida una hora
-Valide que sea número entero
-Valide que esté entre 0 y 23
-si no cumple, mostrar:
    -Hora no válida

-Si cumple:
    de 0 a 11 --> Buenos días
    de 12 a 18 --> Buenas tardes
    de 19 a 23 --> Buenas noches */

const prompt = require('prompt-sync')();

const hora = Number(prompt('Ingrese una hora: '));

if(Number.isNaN(hora) || !Number.isInteger(hora) || hora < 0 || hora > 23) {
    console.log('Hora no válida');
} else if( hora >= 0 && hora <= 11) {
    console.log('¡Buenos días!');
} else if ( hora >= 12 && hora <= 18) {
    console.log('¡Buenas Tardes!');
} else {
    console.log('¡Buenas noches!');
}

