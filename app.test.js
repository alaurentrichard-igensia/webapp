const calcul = require('./app');

describe('calcul', () => {
  test('additionne 1 + 2 et retourne 3', () => {
    expect(calcul(1, 2)).toBe(3);
  });

  test('additionne 20 + 5 et retourne 25', () => {
    expect(calcul(20, 5)).toBe(25);
  });

  test('additionne des nombres négatifs', () => {
    expect(calcul(-2, -3)).toBe(-5);
  });

  test('additionne un nombre positif et un nombre négatif', () => {
    expect(calcul(10, -4)).toBe(6);
  });
});
