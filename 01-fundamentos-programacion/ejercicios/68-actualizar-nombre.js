/*Hacer una función que reciba:
- (usuarios, id, nuevoNombre)
- Debe buscar por id.
- Cambiar el nombre.
- Retornar el usuario actualizado. */

const usuarios = [
     { id: 1 , nombre: 'Miguel', edad: 24 },
    { id: 2 , nombre: 'Julieta', edad: 26},
    { id: 3 , nombre: 'Max', edad: 28},
    { id: 4, nombre: 'Lizet', edad: 23},
    { id: 5, nombre: 'Argelia', edad: 27}
];

const actualizarNombre = ( usuarios, id, nuevoNombre) => {

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].id ===  id) {
            usuarios[i].nombre = nuevoNombre;
            return usuarios[i];
        }
    }
    return null;
}

console.log(actualizarNombre(usuarios, 2, "Carla"));

