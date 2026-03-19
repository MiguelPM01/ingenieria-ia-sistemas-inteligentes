const prompt = require('prompt-sync')();

let n1 = Number(prompt('Ingrese el primer número: '));
let n2 = Number(prompt('Ingrese el segundo número: '));
let operacion = prompt('Elija la operacion (+, -, *, /): ');

const calcular = (a, b, operacion) => {
    if (operacion === '+') {
        return `La suma es: ${a+b}`;
    } else if (operacion === '-') {
        return `La resta es: ${a-b}`;
    } else if (operacion === '*') {
        return `La multiplicación es ${a*b}`;
    } else if (operacion === '/') {
        if (b === 0){
            return 'No se puede dividir entre cero';
        }
        return `La división es ${a/b}`;
    } else {
        return 'Operacion no valida';
    }
};

const resultado = calcular(n1, n2, operacion);

console.log(resultado);

