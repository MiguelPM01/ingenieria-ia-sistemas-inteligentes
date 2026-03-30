const prompt = require('prompt-sync')();

const total = Number(prompt('Ingrese el total de su compra: '));
const membresia = prompt('¿Cuenta con membresía?: ').trim().toLowerCase();

let descuento = 0;
let totalFinal = total;

if (Number.isNaN(total) || total < 0){
    console.log('Total no válido')
 } else if (membresia !== 'si' && membresia !== 'no'){
    console.log('Respuesta de membresía no válida');
 } else if(total > 1000 && membresia === 'si'){
    descuento = total * 0.20;
    totalFinal = total - descuento;
    console.log('Su compra cuenta con un descuento del 20%');
    console.log(`Su descuento es de ${descuento} y el total final de su compra es de ${totalFinal}`);
 } else if(total > 1000 && membresia === 'no'){
    descuento = total * 0.10;
    totalFinal = total - descuento;
    console.log('Su compra cuenta con un descuento del 10%');
    console.log(`Su descuento es de ${descuento} y el total final de su compra es de ${totalFinal}`);
 } else {
    console.log('Su compra cuenta con un descuento del 0%');
    console.log(`Su descuento es de ${descuento} y el total final de su compra es de ${totalFinal}`);
 }
 