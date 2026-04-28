/*Hacer una función que:
-Reciba un arreglo de números.
-Recorra el arreglo
-Regrese un nuevo arreglo solo con los números pares */

const filtrarPares = (numeros) => {
    let pares = [];

    for(let i = 0; i < numeros.length; i ++) {

        if (numeros[i] % 2 === 0 ) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

let resultado = filtrarPares(lista);

console.log(`Los números pares son: [${resultado}]`);

