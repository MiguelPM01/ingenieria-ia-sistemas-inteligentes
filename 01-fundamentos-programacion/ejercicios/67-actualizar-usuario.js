/* Crear una función que reciba:
- (usuarios, id, nuevaEdad)
- Debe buscar el usuario por id, cambiar su edad y retornar el usuario actualizado */

const usuarios = [
    { id: 1 , nombre: 'Miguel', edad: 24 },
    { id: 2 , nombre: 'Julieta', edad: 26},
    { id: 3 , nombre: 'Max', edad: 28},
    { id: 4, nombre: 'Lizet', edad: 23},
    { id: 5, nombre: 'Argelia', edad: 27}
];

const actualizarUsuario = (usuarios, id, nuevaEdad) => {

    for(let i = 0; i < usuarios.length; i++) {

        if(usuarios[i].id === id) {

            usuarios[i].edad = nuevaEdad;
            return usuarios[i];
        }
    }
    return null;
}

console.log(actualizarUsuario(usuarios, 1, 25));

