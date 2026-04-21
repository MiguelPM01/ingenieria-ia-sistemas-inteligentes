/*Requisitos
Realizar un programa que:
- Tenga un arreglo como este [5,8,10,3]
-Recorra el arreglo con un ciclo
-sume todos los números
-Al final muestre:
    -La suma total es : 26 */

const numeros = [5,8,10,3];

let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(`La suma es: ${suma}`);

