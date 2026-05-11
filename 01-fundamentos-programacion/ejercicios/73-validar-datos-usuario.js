/* Antes de crear el usuario, validar que:
    - Si el nombre está vacío, retornar null,
    - Si edad es menor a 0, retornar null */

    const crearUsuario = (nombre, edad) => {
        if(nombre === '' || edad < 0) {
            return null;
        }
        return {
            nombre: nombre.trim() === '',
            edad
        };
    };

    console.log(crearUsuario('Miguel', 24));
    console.log(crearUsuario('', 25));
    console.log(crearUsuario('Isabel', -5));

