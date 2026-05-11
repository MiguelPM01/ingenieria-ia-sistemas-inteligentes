/* Agregar una propiedad "Activo" a cada usuario 
 Crear la función que retorne solo los usuarios activos*/

const users = [
        { id: 1, nombre: 'Miguel', edad: 24, activo: true},
        { id: 2, nombre: 'Julieta', edad: 26, activo: true},
        { id: 3, nombre: 'Max', edad: 28, activo: false},
        { id: 4, nombre: 'Lizet', edad: 23, activo: false},
        { id: 5, nombre: 'Isabel', edad:27, activo: true}
]

const obtenerActivos = (users) => {
    let activos = [];

    for(let i = 0; i < users.length; i++) {
        if(users[i].activo) {
            activos.push(users[i]);
        }
    }
    return activos;
}

console.log(obtenerActivos(users));




