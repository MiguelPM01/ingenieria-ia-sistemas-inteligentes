/* Requisitos
Realizar un programa que:
- Pida un número de mes
- Valide que sea número entero
- Valide que esté entre 1 y 12
- Si no cumple, mostrar:
    -Mes no válido
-Si cumple, mostrar:
    -Mes válido */

const prompt = require('prompt-sync')();

const mes = Number(prompt('Ingrese un número de mes: '));

if(Number.isNaN(mes) || !Number.isInteger(mes) || mes < 1 || mes > 12) {
    console.log('Mes no válido');
} else {
    console.log('Mes válido');
}

// Mayor que > menor que <