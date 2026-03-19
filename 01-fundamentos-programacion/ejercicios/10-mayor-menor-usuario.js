const prompt = require('prompt-sync')();

let numero = Number(prompt('Ingrese un número: '));

if (numero > 10) {
    console.log('El número es mayor que diez.');
} else {
    console.log('El número es menor o igual a diez.');
}
