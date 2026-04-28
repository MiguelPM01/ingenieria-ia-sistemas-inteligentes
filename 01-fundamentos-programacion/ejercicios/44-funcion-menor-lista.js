/* Hacer una funcion que:
- Reciba un arreglo de números
- Recorra el arreglo
- Regrese el número menor */

const numeros = [5, 8, 10, 3, 2];

const menorLista = (numeros) => {
    let menor = numeros[0];

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
};

console.log(`El número menor de la lista es: ${menorLista(numeros)}`);

