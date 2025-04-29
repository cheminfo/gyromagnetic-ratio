import { gyromagneticRatioMHzT } from './gyromagneticRatioMHzT';

export type GyromagneticNucleus = keyof typeof gyromagneticRatioMHzT;

export const gyromagneticRatio: Record<GyromagneticNucleus, number> = {};
for (const key in gyromagneticRatioMHzT) {
  gyromagneticRatio[key] = gyromagneticRatioMHzT[key] * 2 * Math.PI;
}

export * from './getGyromagneticNucleus';
export * from './getGyromagneticRatio';
