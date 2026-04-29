/* Hacer una función que:
- Reciba un arreglo denúmeros.
- Reciba un límite.
- Sume los números mayores que ese límite.
- Regrese la suma. */

const sumarMayores = (numeros, limite) => {
    let suma = 0;

    for(let i=0; i <numeros.length; i++) {
        if(numeros[i] > limite) {
            suma += numeros[i];
        }
    }
    return suma;
}

console.log(sumarMayores([5, 10, 15, 20], 10));

