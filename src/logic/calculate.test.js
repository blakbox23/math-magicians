import calculate from './calculate';

test('AC button clears everything', () => {
  const obj = {
    total: 10,
    next: null,
    operation: '-',
  };
  expect(calculate(obj, 'AC')).toEqual({
    total: 0,
    next: null,
    operation: null,
  });
});
test('Plus sign adds up the total', () => {
  const obj2 = {
    total: 0,
    next: 10,
    operation: '+',
  };
  expect(calculate(obj2, '+')).toEqual({
    total: '10',
    next: null,
    operation: '+',
  });
});
test('Minus sign subtructs from the total', () => {
  const obj = {
    total: 0,
    next: 10,
    operation: '-',
  };
  expect(calculate(obj, '-')).toEqual({
    total: '-10',
    next: null,
    operation: '-',
  });
});
test('Multiplication sign multiplies on the total', () => {
  const obj = {
    total: 2,
    next: 10,
    operation: 'x',
  };
  expect(calculate(obj, 'x')).toEqual({
    total: '20',
    next: null,
    operation: 'x',
  });
});
test('Multiplication sign multiplies on the total', () => {
  const obj = {
    total: 100,
    next: 10,
    operation: '÷',
  };
  expect(calculate(obj, '÷')).toEqual({
    total: '10',
    next: null,
    operation: '÷',
  });
});
test('Modulus sign returns the remainder after division', () => {
  const obj = {
    total: 11,
    next: 2,
    operation: '%',
  };
  expect(calculate(obj, '%')).toEqual({
    total: '1',
    next: null,
    operation: '%',
  });
});
test('should display the given value as next', () => {
  const obj = {
    total: null,
    next: 1,
    operation: '+',
  };
  const obj2 = {
    total: null,
    next: '16',
    operation: '+',
  };
  expect(calculate(obj, '6')).toEqual(obj2);
});
