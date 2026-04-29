/* Hacer una función que:
- Reciba un arreglo.
- Recorra el arreglo de atrás hacia adelante.
- Regrese un nuevo arreglo invertido. */

const arreglo = [1, 2, 3, 4];

const invertirLista = (arreglo) => {
    let nuevo = [];

    for(let i = arreglo.length -1; i >= 0; i--) {
        nuevo.push(arreglo[i]);
    }
    return nuevo;
}

console.log(invertirLista(arreglo));

