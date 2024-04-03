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
  expect(getGyromagneticRatio('119Sn')).toBe(-100317000);
  expect(getGyromagneticRatio('1H')).toBe(267.52218744e6);
  expect(getGyromagneticRatio('13C')).toBe(67.28284e6);
  expect(getGyromagneticRatio('14N')).toBe(19.331e6);
});

test('should return null for unknown nuclei', () => {
  expect(getGyromagneticRatio('unknown')).toBe(null);
  expect(getGyromagneticRatio('12C')).toBe(null);
});

test('should return the gyromagnetic ratio for nuclei provided numbers only', () => {
  expect(getGyromagneticRatio('77')).toBe(51.253857e6);
  expect(getGyromagneticRatio('123')).toBe(-70.59098e6);
});

test('should have absolute values greater than 10000', () => {
  const values = Object.values(gyromagneticRatio);
  values.forEach((value) => {
    expect(Math.abs(value)).toBeGreaterThan(10000);
  });
});
