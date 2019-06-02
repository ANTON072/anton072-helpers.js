import { baseFontSize } from '../src/index';

test('contentSizeFitter 500 375', () => {
  expect(baseFontSize(500, 375)).toBe(15);
});

test('contentSizeFitter 750 375', () => {
  expect(baseFontSize(750, 375)).toBe(10);
});

test('contentSizeFitter 750 411', () => {
  expect(baseFontSize(750, 360)).toBe(9.6);
});
