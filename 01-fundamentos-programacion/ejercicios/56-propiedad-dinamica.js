/* Crear un archivo donde:
- Declare una variable.
- Crear un objeto "usuario" con:
  - nombre.
  - edad.
- Agregar dinámicamente la propiedad usando [] */

let usuario = {
    nombre: 'Miguel',
    edad: 24
}

let propiedad = 'rol';

usuario[propiedad] = 'admin';

console.log(usuario);

