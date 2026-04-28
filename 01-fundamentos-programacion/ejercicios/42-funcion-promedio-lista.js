/* Hacer una función que:
- Reciba un arreglo de números
- Sume todos los números
- Calcule el promedio
- Regrese el promedio*/
const numeros = [5, 8, 10, 3, 2];

const promedioLista = (numeros) => {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    return promedio;
}

console.log(`El promedio del arreglo es ${promedioLista(numeros)}`);

