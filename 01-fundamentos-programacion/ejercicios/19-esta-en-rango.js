const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingrese un número: '));

if (Number.isNaN(numero)) {
    console.log('Entrada no válida');
} else if ( numero >= 10 && numero <= 20) {
    console.log('Está dentro del rango');
} else {
    console.log('Está fuera del rango');
}

