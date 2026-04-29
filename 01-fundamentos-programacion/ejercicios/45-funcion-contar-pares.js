/* Hacer una función que:
- Reciba un arreglo de números.
- Cuente cuántos son pares.
- Regrese la cantidad. */

const numeros = [1, 2, 3, 4, 5, 6];


const contarPares = (numeros) => {
    let contador = 0;

        for (let i = 0; i < numeros.length; i++){
            if (numeros[i] % 2 === 0){
            contador++;
        }
    }
    return contador;
};

 console.log(`Hay ${contarPares(numeros)} números pares`);