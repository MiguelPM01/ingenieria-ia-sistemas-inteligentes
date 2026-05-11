/* Hacer una función que reciba:
- (usuarios, nombre, edad)
- Cree automáticamente el id tomando el último id + 1 */

const usuarios = [
        { id: 1, nombre: 'Miguel', edad: 24},
        { id: 2, nombre: 'Julieta', edad: 26},
        { id: 3, nombre: 'Max', edad: 28},
        { id: 4, nombre: 'Lizet', edad: 23},
        { id: 5, nombre: 'Andrea', edad:27}
]

const crearUsuarioId = (usuarios, nombre ,edad) => {
    let ultimoUsuario = usuarios[usuarios.length - 1];
    let nuevoId = ultimoUsuario.id + 1;

    const nuevoUsuario = {
        id: nuevoId,
        nombre,
        edad
    }

    usuarios.push(nuevoUsuario);

    return nuevoUsuario;
}

console.log(crearUsuarioId(usuarios, 'sara', 19));



