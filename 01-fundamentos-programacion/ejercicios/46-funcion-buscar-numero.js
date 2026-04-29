/* Hacer una función que:
- Reciba un arreglo y un número a buscar.
- Recorra el arreglo.
- Regrese "true" si lo encuentra.
- Regrese "false" si no la encuentra */

const buscarNumero = (arreglo, numero) => {

    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] === numero) {
            return true;
        }
    }
    return false;
};

console.log(buscarNumero([5, 8, 10, 3, 2], 10));

