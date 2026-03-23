const prompt = require('prompt-sync')();

let edad = Number(prompt('Ingrese su edad: '));

if (Number.isNaN(edad) || edad < 0) {
    console.log('Entrada no válida');
} else if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');

}

