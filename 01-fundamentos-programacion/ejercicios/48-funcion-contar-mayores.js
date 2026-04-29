/* Hacer una función que:
- Reciba un arreglo de números.
- Reciba un límite.
- Cuente cuantos números son mayores que ese límite.
- Regrese la cantidad. */

const contarMayores = (arreglo , limite) => {
    let contador = 0;

    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > limite) {
            contador++;
        }
    }
    return contador;
}

console.log(contarMayores([5, 10, 15, 20], 10));

