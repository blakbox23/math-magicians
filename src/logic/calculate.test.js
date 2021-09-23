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
test('Equals sign prompts the total', () => {
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
