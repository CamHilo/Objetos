// Ejercicio : el mostrador - VERSION DE REFERENCIA 

//---- Paso 1 y 2 Funciones normales ----
function calcularTotal(precio, cantidad = 1){
    return precio * cantidad;
};

function esPedidoValido(cantidad){
    return cantidad>0;
};

function formatearPrecio(monto){
    return "$" + monto.toFixed(2);
};

console.log("---- Paso 1 y 2 ----");
console.log(calcularTotal(35, 2));
console.log(calcularTotal(35));
console.log(esPedidoValido(0));
console.log(formatearPrecio(35));


//----Paso 3---- Las mismas funciones, pero en flecha corta-----
const calcularTotal2 = (precio, cantidad= 1) => precio * cantidad;

const esPedidoValido2 = (cantidad) => cantidad>0;

const formatearPrecio2 = (monto) => "$" + monto.toFixed(2);

console.log("---- Paso 3 ----");
console.log(calcularTotal2(35, 2));
console.log(esPedidoValido2(0));
console.log(formatearPrecio2(35));

console.log("Camilo Ismael Soto González");  