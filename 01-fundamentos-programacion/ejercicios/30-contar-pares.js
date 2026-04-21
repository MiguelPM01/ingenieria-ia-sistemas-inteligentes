/* Requisitos
-Hacer un programa que:
- Tenga un arreglo:
    -[5,8,10,3,2]
-Recorra el arreglo
-Cuente cuántos números son pares
-Muestre:
    -Hay x numeros pares */

const numeros = [5, 8, 10, 3, 2];

let contador = 0;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        contador++;
    }
}
 console.log(`Hay ${contador} números pares`);
