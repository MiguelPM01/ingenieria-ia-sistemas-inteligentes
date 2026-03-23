const prompt = require('prompt-sync')();

const numero = Number(prompt('Ingresa un número: '));

if (Number.isNaN(numero) || !Number.isInteger(numero)) {
    console.log('Entrada no válida');
} else if (numero % 2 === 0 ) {
    console.log('Par');
} else {
    console.log('Impar');
}

