/*Hacer una función que:
- Reciba un arreglo de palabras.
- Reciba un número mínimo de caracteres.
- Cuente cuántas palabras tienen más caracteres que ese mínimo.
- Regrese la cantidad. */

const contarPalabrasLargas = (palabras, minCaracteres) => {
    let contador = 0;

    for(let i = 0; i < palabras.length; i++) {
        if(palabras[i].length > minCaracteres) {
            contador++;        
        }
    }
    return contador;
}

console.log(contarPalabrasLargas(['sol', 'computadora', 'mesa', 'programación'], 5));

