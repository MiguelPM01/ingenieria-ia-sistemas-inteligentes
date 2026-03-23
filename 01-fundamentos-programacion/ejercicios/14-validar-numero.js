const prompt = require('prompt-sync')();

let numero = Number(prompt('Ingrese un número: '));

if (Number.isNaN(numero)){
    console.log('Entrada no válida');
} else {
    console.log("Entrada válida");
}

