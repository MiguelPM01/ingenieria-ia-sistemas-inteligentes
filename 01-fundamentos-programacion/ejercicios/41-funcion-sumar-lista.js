/* Requisitos
Hacer una funcion que:
- Reciba un arreglo de números
- Recorra el arreglo
- Regrese la suma total */

const numeros = [1, 2, 3, 4];

const sumarLista = (numeros) => {
    let suma = 0;

    for (let i=0; i <numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

let resultado = sumarLista(numeros);

console.log(`La suma de los números es: ${resultado}`);

const arreglo = [5, 10, 15];

const sumarArreglo = (arreglo) => {
    let suma = 0;

    for (let i = 0; i <arreglo.length; i++) {
        suma +=  arreglo[i];
    }

    return suma;

}

let resultado2 = sumarArreglo(arreglo);

console.log(`La suma del arreglo es ${resultado2}`);

