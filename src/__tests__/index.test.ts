import { test, expect } from 'vitest';

import {
  gyromagneticRatio,
  getGyromagneticNucleus,
  getGyromagneticRatio,
} from '..';

test('gyromagneticRatio', () => {
  expect(gyromagneticRatio['1H']).toBeCloseTo(267522188, 0);
});

test('getGyromagneticRatio', () => {
  expect(getGyromagneticRatio('1H')).toBeCloseTo(267522188, 0);
  expect(getGyromagneticRatio('proton')).toBeCloseTo(267522188, 0);
  expect(getGyromagneticRatio('1hydrogen')).toBeCloseTo(267522188, 0);
  expect(getGyromagneticRatio('hydrogen1')).toBeCloseTo(267522188, 0);
  expect(getGyromagneticRatio('carbon13')).toBeCloseTo(67278755, 0);
  expect(getGyromagneticRatio('119Sn')).toBeCloseTo(-100185016, 0);
  expect(getGyromagneticRatio('1H')).toBeCloseTo(267522188, 0);
  expect(getGyromagneticRatio('13C')).toBeCloseTo(67278755, 0);
  expect(getGyromagneticRatio('14N')).toBeCloseTo(19328792, 0);
});

test('should return null for unknown nuclei', () => {
  expect(getGyromagneticRatio('unknown')).toBe(null);
  expect(getGyromagneticRatio('12C')).toBe(null);
});

test('should return the gyromagnetic ratio for nuclei provided numbers only', () => {
  expect(getGyromagneticRatio('77')).toBeCloseTo(51108822, 0);
  expect(getGyromagneticRatio('123')).toBe(null);
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
  expect(getGyromagneticNucleus('123')).toBe(null);
  expect(getGyromagneticNucleus('unknown')).toBe(null);
});
