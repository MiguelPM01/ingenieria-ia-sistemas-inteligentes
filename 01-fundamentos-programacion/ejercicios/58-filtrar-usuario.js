/*Con el siguiente arreglo:
{nombre: "Miguel", edad: 24},
{nombre: "Ana", edad: 30},
{nombre: "Luis", edad: 28}
    - Usar un for para imprimir solo los usuarios mayores de 25 años */

const usuarios = [
    {nombre: "Miguel", edad: 24},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 28}
]

for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].edad > 25) {
        console.log(usuarios[i].nombre);
    }
}

