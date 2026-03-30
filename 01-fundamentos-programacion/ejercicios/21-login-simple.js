const prompt = require('prompt-sync')();

const user = prompt('Ingresa tu usuario: ').trim().toLowerCase();
const password = prompt('Ingresa tu contraseña: ').trim();

if (user === "admin" && password === "1234"){
    console.log('Acceso correcto');
} else {
    console.log('Usuario o contraseña incorrectos');
}

