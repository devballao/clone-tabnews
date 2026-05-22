const calculadora = require("../models/calculadora");

test("A soma de 2 + 2 tem que ser 4", () => {
  const resultada = calculadora.somar(2, 2);
  expect(resultada).toBe(4);
});
