/* Requisitos
Hacer un programa que:
- Tenga un arreglo: [5, 8, 10, 3, 2]
- Recorra el arreglo
- Sume todos los números
- Calcule el promedio
- Muestre: "El promedio es: 5.6"
 */

const numeros = [5, 8, 10, 3, 2];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let promedio = suma / numeros.length;

console.log(`El promedio es: ${promedio}`);
