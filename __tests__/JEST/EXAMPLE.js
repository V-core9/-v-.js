function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 11 + 22 to equal 33', () => {
  expect(sum(11, 22)).toBe(33);
});


test('adds 44 + 77 to equal 121', () => {
  expect(sum(44, 77)).toBe(121);
});


test('adds 440 + 770 to equal 1210', () => {
  expect(sum(440, 770)).toBe(1210);
});
