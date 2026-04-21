/* Requisitos
- Haccer un programa que:
-Tenga un arreglo:
    -[5, 8, 10, 3, 2]
-Recorra el arreglo
-Encuentre el número mayor
-muestre:
    -El número mayor es: 10 */

const numeros = [5, 8, 10, 3, 2];

let mayor = numeros[0];

for (let i = 0; i < numeros.length; i ++ ){
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log(`El número mayor es: ${mayor}`);
