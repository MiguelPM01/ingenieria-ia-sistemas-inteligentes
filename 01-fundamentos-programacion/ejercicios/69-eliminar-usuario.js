/* Crear una función que reciba:
- (usuarios, id)
- Debe eliminar el usuario con ese id
- Retornar el arreglo actualizado */

const usuarios = [
     { id: 1 , nombre: 'Miguel', edad: 24 },
    { id: 2 , nombre: 'Julieta', edad: 26},
    { id: 3 , nombre: 'Max', edad: 28},
    { id: 4, nombre: 'Lizet', edad: 23},
    { id: 5, nombre: 'Argelia', edad: 27}
];

const eliminarUsuario = (usuarios, id) => {

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].id === id) {
            usuarios.splice(i, 1);
            return usuarios;
        }
    }
    return null;
}

console.log(eliminarUsuario(usuarios, 5));

