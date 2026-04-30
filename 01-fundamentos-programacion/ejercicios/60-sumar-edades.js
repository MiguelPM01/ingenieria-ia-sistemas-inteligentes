/*Con el mismo arreglo:
- Sumar todas las edades */

const usuarios = [
    {nombre: "Miguel", edad: 24},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 28}
]

let suma = 0;

for(let i = 0; i < usuarios.length; i++) {
    suma += usuarios[i].edad;
}

console.log(suma);

