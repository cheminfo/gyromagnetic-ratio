import { test, expect } from 'vitest';

import {
  gyromagneticRatio,
  getGyromagneticNucleus,
  getGyromagneticRatio,
} from '..';

test('gyromagneticRatio', () => {
  expect(gyromagneticRatio['1H']).toBe(267522188.05267358);
});

test('getGyromagneticRatio', () => {
  expect(getGyromagneticRatio('1H')).toBe(267522188.05267358);
  expect(getGyromagneticRatio('proton')).toBe(267522188.05267358);
  expect(getGyromagneticRatio('1hydrogen')).toBe(267522188.05267358);
  expect(getGyromagneticRatio('hydrogen1')).toBe(267522188.05267358);
  expect(getGyromagneticRatio('carbon13')).toBe(67278754.64911805);
  expect(getGyromagneticRatio('119Sn')).toBe(-100185015.97808641);
  expect(getGyromagneticRatio('1H')).toBe(267522188.05267358);
  expect(getGyromagneticRatio('13C')).toBe(67278754.64911805);
  expect(getGyromagneticRatio('14N')).toBe(19328792.16623208);
});

test('should return null for unknown nuclei', () => {
  expect(getGyromagneticRatio('unknown')).toBe(null);
  expect(getGyromagneticRatio('12C')).toBe(null);
});

test('should return the gyromagnetic ratio for nuclei provided numbers only', () => {
  expect(getGyromagneticRatio('77')).toBe(51108822.18688955);
  expect(getGyromagneticRatio('123')).toBe(-70481054.36148386);
});

test('should have absolute values greater than 10000', () => {
  const values = Object.values(gyromagneticRatio);
  for (const value of values) {
    expect(Math.abs(value)).toBeGreaterThan(10000);
  }
});

test('get nucleus from a string', () => {
  expect(getGyromagneticNucleus('1H')).toBe('1H');
  expect(getGyromagneticNucleus('proton')).toBe('1H');
  expect(getGyromagneticNucleus('1hydrogen')).toBe('1H');
  expect(getGyromagneticNucleus('1-hydrogen')).toBe('1H');
  expect(getGyromagneticNucleus('hydrogen1')).toBe('1H');
  expect(getGyromagneticNucleus('hydrogen-1')).toBe('1H');
  expect(getGyromagneticNucleus('carbon13')).toBe('13C');
  expect(getGyromagneticNucleus('119Sn')).toBe('119Sn');
  expect(getGyromagneticNucleus('77')).toBe('77Se');
  expect(getGyromagneticNucleus('123')).toBe('123Te');
  expect(getGyromagneticNucleus('unknown')).toBe(null);
});
