const prompt = require('prompt-sync')();

const number = Number(prompt('Ingrese un número por favor: '));

if (Number.isNaN(number)){
    console.log('Entrada no válida')
} else if (number > 0){
    console.log('Número positivo');
} else if (number < 0){
    console.log('Número negativo')
} else{
    console.log('Cero');
}
    


