const prompt = require('prompt-sync')();

const edad = Number(prompt('Ingresa tu edad: '));
const identificacion = prompt('¿Cuentas con identificación?: ').trim().toLocaleLowerCase();

if(Number.isNaN(edad) || edad < 0) {
    console.log('Edad no válida');
} else if (edad >= 18 && identificacion === 'si' ) {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado');
}