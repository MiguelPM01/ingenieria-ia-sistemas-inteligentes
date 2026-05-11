/* Crear una función que reciba usuarios y retorne un arreglo solo con los nombres */

const users = [
        { id: 1, nombre: 'Miguel', edad: 24},
        { id: 2, nombre: 'Julieta', edad: 26},
        { id: 3, nombre: 'Max', edad: 28},
        { id: 4, nombre: 'Lizet', edad: 23},
        { id: 5, nombre: 'Isabel', edad:27}
]

const obtenerNombres = (users) => {
    let nombres = [];

    for( let i = 0; i < users.length; i++) {
         nombres.push(users[i].nombre);
    }

    return nombres;
}

console.log(obtenerNombres(users));





