const prompt = require('prompt-sync')();

const calificacion = Number(prompt('Ingresa tu calificación: '));

if(Number.isNaN(calificacion) || calificacion < 0 || calificacion > 10){
    console.log('Calificación no válida');
} else if (calificacion < 6){
    console.log('Reprobado');
} else {
    console.log('Aprobado')
}