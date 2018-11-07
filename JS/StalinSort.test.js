const SS = require('./StalinSort');

test('Already sorted array (ascending mode)', () => {
  const arr = [0, 1, 2, 3];
  expect(SS(arr)).toStrictEqual(arr);
});

test('Empty array', () => {
  const arr = [];
  expect(SS(arr)).toStrictEqual(arr);
});

test('Reversed array (ascending mode)', () => {
  const arr = [3, 2, 1, 0];
  expect(SS(arr)).toStrictEqual([3]);
});

test('Almost sorted array (ascending mode) 1/2', () => {
  const arr = [0, 1, 4, 3, 2];
  expect(SS(arr)).toStrictEqual([0, 1, 4]);
});

test('Almost sorted array (ascending mode) 2/2', () => {
  const arr = [0, -1, 2, 4, 7];
  expect(SS(arr)).toStrictEqual([0, 2, 4, 7]);
});

test('Repeated array (ascending mode)', () => {
  const arr = [].fill(1);
  expect(SS(arr)).toStrictEqual(arr);
});

test('Already sorted array (descending mode)', () => {
  const arr = [0, 1, 2, 3];
  expect(SS(arr, 'des')).toStrictEqual([0]);
});

test('Empty array', () => {
  const arr = [];
  expect(SS(arr, 'des')).toStrictEqual(arr);
});

test('Reversed array (descending mode)', () => {
  const arr = [3, 2, 1, 0];
  expect(SS(arr, 'des')).toStrictEqual(arr);
});

test('Almost sorted array (descending mode) 1/2', () => {
  const arr = [0, 1, 4, 3, 2];
  expect(SS(arr, 'des')).toStrictEqual([0]);
});

test('Almost sorted array (descending mode) 2/2', () => {
  const arr = [0, -1, 2, 4, 7];
  expect(SS(arr, 'des')).toStrictEqual([0, -1]);
});

test('Repeated array (descending mode)', () => {
  const arr = [].fill(1);
  expect(SS(arr, 'des')).toStrictEqual(arr);
});

test('Wrong order', () => {
  expect(() => SS([0, 1, 2], 'desc')).toThrowError('Invalid order: "desc"');
  expect(() => SS([0, 1, 2], 'ascending')).toThrowError('Invalid order: "ascending"');
  expect(() => SS([0, 1, 2], 'descending')).toThrowError('Invalid order: "descending"');
  expect(() => SS([0, 1, 2], 'DESC')).toThrowError('Invalid order: "DESC"');
  expect(() => SS([0, 1, 2], 'DES')).toThrowError('Invalid order: "DES"');
  expect(() => SS([0, 1, 2], 'ASC')).toThrowError('Invalid order: "ASC"');
});