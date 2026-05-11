/* ¿Qué pasaría si usuarios está vacío?
- const usuarios =[];
- La función fallaría porque no existe:
usuarios[usuarios.length - 1]*
- Ajustar la función para que:
    - Si el arreglo está vacío, el nuevo id sea 1
    -Si no está vacío, use el último id + 1 */

    const usuarios = [];

    const crearUsuario = (usuarios, nombre, edad) =>{
        let nuevoId;

        if(usuarios.length === 0) {
            nuevoId = 1;
        } else {
            let ultimoUsuario = usuarios[usuarios.length -1];
            nuevoId = ultimoUsuario.id + 1;
        }

        const nuevoUsuario = {
            id: nuevoId,
            nombre,
            edad
        }
        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    console.log(crearUsuario(usuarios, 'Isabel', 23));



