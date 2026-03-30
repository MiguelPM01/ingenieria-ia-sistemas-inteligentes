/* Requisitos
- Hacer un programa que:
  -Pida una opción númerica del 1 al 3
  - Valide que sea número entero
  -muestre:
        -Opción 1 seleccionada
        -Opción 2 Seleccionada
        -Opción 3 seleccionada
    -Si no está entre 1 y 3:
        -Opción no válida */

const prompt = require('prompt-sync')();

const option = Number(prompt('Ingresa una opción del 1 al 3: '));

if (Number.isNaN(option) || !Number.isInteger(option)){
    console.log('Entrada inválida');
} else if(option === 1){
    console.log('Opción 1 seleccionada');
} else if(option === 2) {
    console.log('Opción 2 seleccionada');
} else if (option === 3) {
    console.log('Opción 3 seleccionada');
}  else {
    console.log('Opción no válida')
}