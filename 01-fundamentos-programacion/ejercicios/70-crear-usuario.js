/* Crear una función que reciba:
- (usuarios, nuevoUsuario)
- Agregue el nuevo usuario al arreglo y retorne el arreglo actualizado */

const usuarios = [
        { id: 1, nombre: 'Miguel', edad: 24},
        { id: 2, nombre: 'Julieta', edad: 26},
        { id: 3, nombre: 'Max', edad: 28},
        { id: 4, nombre: 'Lizet', edad: 23},
        { id: 5, nombre: 'Andrea', edad:27}
]

const crearUsuario = (usuarios, nuevoUsuario) => {
    
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].id === nuevoUsuario.id) {
            return null;
        }
    }
    usuarios.push(nuevoUsuario);
    return usuarios;
}

console.log(crearUsuario(usuarios, {id: 6, nombre: 'Isabel', edad: 23}));

