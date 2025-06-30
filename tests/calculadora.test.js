const calculadora = require("../models/calculadora.js");

test("2 + 2 dever retorna 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("2 + 3 dever retorna 5", () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBe(5);
});

test("banana + 3 dever retornar error", () => {
  const resultado = calculadora.somar("banana", 3);
  expect(resultado).toBe("error");
});
