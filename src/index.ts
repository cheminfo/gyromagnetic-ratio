import { gyromagneticRatioMHzT } from './gyromagneticRatioMHzT';

export type GyromagneticNucleus = keyof typeof gyromagneticRatioMHzT;

export const gyromagneticRatio = Object.fromEntries(
  Object.entries(gyromagneticRatioMHzT).map(([key, value]) => [
    key,
    value * 2 * Math.PI * 1e6,
  ]),
) as typeof gyromagneticRatioMHzT;

export * from './gyromagneticRatioMHzT';
export * from './getGyromagneticNucleus';
export * from './getGyromagneticRatio';
