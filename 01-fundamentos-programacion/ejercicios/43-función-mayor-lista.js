/* Requisitos
Hacer una función que:
- Reciba un arreglo de números
- Recorra el arreglo
- regrese el mayor */

const numeros = [5, 8, 10, 3, 2];


const mayorLista = (numeros) =>{
  let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
      if(numeros[i] > mayor){
        mayor = numeros[i];
      }
    }
    return mayor;
};

console.log(`El número mayor del arreglo es ${mayorLista(numeros)}`);