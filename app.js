// Función que suma dos números
const suma = (a, b) => {
    return a + b;
}

// Tasas de conversión desde 1 euro
let tasaCambio = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Convierte euros a dólares
const deEuroADolar = function(valorEnEuro) {
    return valorEnEuro * tasaCambio.USD;
}

// Convierte dólares a yenes
const deDolarAYen = function(valorEnDolar) {
    let valorEnEuro = valorEnDolar / tasaCambio.USD;
    return valorEnEuro * tasaCambio.JPY;
}

// Convierte yenes a libras esterlinas
const deYenALibra = function(valorEnYen) {
    let valorEnEuro = valorEnYen / tasaCambio.JPY;
    return valorEnEuro * tasaCambio.GBP;
}

// Prueba visual en consola
console.log(suma(7, 3));

// Exportamos las funciones para usarlas en otros archivos
module.exports = { suma, deEuroADolar, deDolarAYen, deYenALibra };
