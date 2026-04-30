/* Crear una funcion que calcule el promedio de edad */

const usuarios = [
    {nombre: "Miguel", edad: 24},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 28}
];

const promedioEdades = (usuarios) => {
    let suma = 0;

    for(let i = 0; i < usuarios.length; i++) {
        suma += usuarios[i].edad;
    }
    return suma / usuarios.length;
}

let resultado = promedioEdades(usuarios);
console.log(resultado);

