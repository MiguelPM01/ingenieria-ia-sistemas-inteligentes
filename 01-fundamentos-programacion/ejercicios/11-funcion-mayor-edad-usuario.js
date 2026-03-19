const prompt = require('prompt-sync')();

const edad = Number(prompt('Ingrese su edad: '));

const esMayorDeEdad = (edad) => {
    return edad >= 18;
};

const resultado = esMayorDeEdad(edad);

console.log(resultado);
