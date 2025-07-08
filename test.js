const { deEuroADolar, deDolarAYen, deYenALibra } = require('./app.js');

test("Un euro debe ser 1.07 dólares", function() {
    expect(deEuroADolar(3.5)).toBeCloseTo(3.745);
});

test("Un dólar debe ser 146.26 yenes", function() {
    // 1 USD = (1 / 1.07) EUR → * 156.5 = yenes
    const esperado = (1 / 1.07) * 156.5;
    expect(deDolarAYen(1)).toBeCloseTo(esperado);
});

test("Un yen debe ser 0.00556 libras", function() {
    // 1 JPY = (1 / 156.5) EUR → * 0.87 = libras esterlinas
    const esperado = (1 / 156.5) * 0.87;
    expect(deYenALibra(1)).toBeCloseTo(esperado);
});
