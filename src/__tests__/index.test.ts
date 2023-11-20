import { getGyromagneticRatio, gyromagneticRatio } from '..';

test('gyromagneticRatio', () => {
  expect(gyromagneticRatio['1H']).toBe(267522187.44);
});

test('getGyromagneticRatio', () => {
  expect(getGyromagneticRatio('1H')).toBe(267522187.44);
  expect(getGyromagneticRatio('proton')).toBe(267522187.44);
  expect(getGyromagneticRatio('1hydrogen')).toBe(267522187.44);
  expect(getGyromagneticRatio('hydrogen1')).toBe(267522187.44);
  expect(getGyromagneticRatio('carbon13')).toBe(67282840);
  expect(getGyromagneticRatio('abc')).toBe(null);
});
