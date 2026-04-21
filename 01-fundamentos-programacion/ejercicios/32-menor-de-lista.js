/* Requisitos
-Hacer un programa que:
- Tenga un arreglo:
    -[5, 8, 10, 3 , 2]
- Recorra el arreglo
- Encuentre el número menor
- Muestre:
    -El número menor es: 2 */

const numeros = [5, 8, 10, 3, 2];

let menor = numeros[0];

for (let i = 0; i < numeros.length; i ++) {
    if( numeros[i] < menor ) {
        menor = numeros [i];
    }
}

console.log(`El número menor es: ${menor}`);