/* Crear una función que reciba usuarios y retorne un arreglo solo con las edades */

const users = [
        { id: 1, nombre: 'Miguel', edad: 24},
        { id: 2, nombre: 'Julieta', edad: 26},
        { id: 3, nombre: 'Max', edad: 28},
        { id: 4, nombre: 'Lizet', edad: 23},
        { id: 5, nombre: 'Isabel', edad:27}
]

const obtenerEdades = (users) => {
    let edades = [];
    for(let i = 0; i < users.length; i++) {
        edades.push(users[i].edad);
    }
    return edades;
}

console.log(obtenerEdades(users));

