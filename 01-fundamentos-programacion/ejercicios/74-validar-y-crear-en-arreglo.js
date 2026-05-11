/* Ahora combinar:
- La función recibe usuarios, nombre, edad
- Debe:
    -Validar nombre y edad
    -crear id automático
    -Retornar el usuario creado
     */

const crearUsuario = (usuarios, nombre, edad) => {
    if(typeof nombre !== 'string') return null;
    if(nombre.trim() === '') return null;
    if(typeof edad !== 'number') return null;
    if(edad < 0 ) return null;
    

    let id;

    if(usuarios.length === 0) {
        id = 1;
    } else {
        id = usuarios[usuarios.length - 1].id + 1;
    }

    const nuevoUsuario = {
        id,
        nombre,
        edad
    };

    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}  

const usuarios = [];

console.log(crearUsuario(usuarios, 'Miguel', 24));
console.log(crearUsuario(usuarios, 'Isabel', 23));
console.log(crearUsuario(usuarios, 123, 'Miguel'));
console.log(usuarios);




