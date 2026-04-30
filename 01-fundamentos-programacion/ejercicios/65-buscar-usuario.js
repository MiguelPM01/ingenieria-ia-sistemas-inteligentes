/* Crear una función que reciba:
 - (usuarios, nombreBuscado).
 - Retorne el usuario que tenga ese nombre */

 const usuarios = [
    { nombre: 'Miguel', edad: 24},
    { nombre: 'Julieta', edad: 26},
    { nombre: 'Sergio', edad: 34},
    { nombre: 'Liz', edad: 23}
 ];

 const buscarUsuario = (usuarios, nombreBuscado) => {
    for (let i = 0; i < usuarios.length; i++) {
        
        if(usuarios[i].nombre === nombreBuscado) {
            return usuarios[i];
        } 
    }
     return null;
 }

 console.log(buscarUsuario(usuarios, 'Sergio'));

