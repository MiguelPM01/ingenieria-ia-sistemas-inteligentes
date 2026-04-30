/* Crear una función que reciba (usuarios, edadMin).
- Imprima los nombres de los usuarios que cumplan edad > edadMin */

const usuarios = [
    {nombre: 'Miguel', edad: 24},
    {nombre: 'Ana', edad: 30},
    {nombre: 'Luis', edad: 28}
];

const filtrarPorEdad = (usuarios, edadMin) => {
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].edad > edadMin) {
            console.log(usuarios[i].nombre);
        }
    }
}

filtrarPorEdad(usuarios, 25);

