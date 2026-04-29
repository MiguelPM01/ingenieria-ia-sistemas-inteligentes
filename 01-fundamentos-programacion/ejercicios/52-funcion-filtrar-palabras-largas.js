/* Hacer una función que:
- Reciba un arreglo de palabras.
- Reciba un mínimo de caracteres.
- Regrese un nuevo arreglo con las palabras que tengan más caracteres que ese mínimo */

const filtrarPalabrasLargas = (palabras, min) => {
 const palabrasLargas = [];

 for(let i = 0; i < palabras.length; i++) {
    if(palabras[i].length > min) {
        palabrasLargas.push(palabras[i]);
    }
 }
 return palabrasLargas;
}

console.log(filtrarPalabrasLargas(['sol', 'computadora', 'mesa', 'progamación'], 5));
