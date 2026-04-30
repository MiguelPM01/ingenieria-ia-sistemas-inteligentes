/*Crear una función que reciba el arreglo
- Dentro hacer la suma
- Retomar el resultado
- Imprimir el resultado */

const usuarios = [
    {nombre: "Miguel", edad: 24},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 28}
]


const sumarEdades = (usuarios) => {
    let suma = 0;

    for(let i = 0; i < usuarios.length; i++) {
        suma += usuarios[i].edad;
    }
    return suma;
}

let resultado = sumarEdades(usuarios);
console.log(resultado);

