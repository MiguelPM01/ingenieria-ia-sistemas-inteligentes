/* Hacer una función que en vez de imprimir, cree una función que retorne un arreglo nuevo con los usuarios mayores a cierta edad. */

const usuarios = [
    {nombre: 'Miguel', edad: 24},
    {nombre: 'Angel', edad: 17},
    {nombre: 'Sergio', edad: 34},
    {nombre: 'Julieta', edad: 26},
    {nombre: 'Sofía', edad: 27}
];

const filtrarMayores = (usuarios, edadMinima) => {
    let resultado = [];

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].edad > edadMinima) {
            resultado.push(usuarios[i]);
        }
    }
    return resultado;
}

console.log(filtrarMayores(usuarios, 25));


