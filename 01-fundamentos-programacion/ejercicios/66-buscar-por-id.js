/* Agregat un id a cada usuario
- Crear una función donde se busque por id */

const usuarios = [
    { id: 1 , nombre: 'Miguel', edad: 24 },
    { id: 2 , nombre: 'Julieta', edad: 26},
    { id: 3 , nombre: 'Max', edad: 28},
    { id: 4, nombre: 'Lizet', edad: 23},
    { id: 5, nombre: 'Argelia', edad: 27}
];

const buscarPorId = ( usuarios, id) => {

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === id) {
            return usuarios[i];
        }
    }
    return null;
}

console.log(buscarPorId(usuarios, 2));

