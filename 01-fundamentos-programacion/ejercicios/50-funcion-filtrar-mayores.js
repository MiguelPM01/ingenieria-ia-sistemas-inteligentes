/* Hacer una función que:
- Reciba un arreglo.
- Reciba un límite;
- Regrese un nuevo arreglo con los números mayores que ese límite. */

const filtrarMayores = (arreglo, limite) => {
    let resultado = [];

    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > limite) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

console.log(filtrarMayores([5, 10, 15, 20], 10));

