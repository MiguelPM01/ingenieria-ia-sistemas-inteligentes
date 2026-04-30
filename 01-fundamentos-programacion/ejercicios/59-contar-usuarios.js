/* Con el mismo arreglo:
- Contar cuantos usuarios son mayores de 25 años */

const usuarios = [
    {nombre: "Miguel", edad: 24},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 28}
]

let contador = 0;

for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].edad > 25) {
        contador++;
    }
}

console.log(contador);

