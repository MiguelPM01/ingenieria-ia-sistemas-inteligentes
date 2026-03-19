const prompt = require('prompt-sync')();

let edad = Number(prompt('Ingrese su edad: '));

const clasificarEdad = (edad) => {
    if (edad <= 17){
        return  'Menor de edad';
    } else if (edad >= 18 && edad <= 59){
        return 'Adulto';
    } else {
        return 'Adulto mayor';
    }
};

const resultado = clasificarEdad(edad);

console.log(resultado);

