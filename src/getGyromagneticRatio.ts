import { getGyromagneticNucleus, gyromagneticRatio } from '.';

export function getGyromagneticRatio(nucleus: string): number | null {
  const realNucleus = getGyromagneticNucleus(nucleus);
  if (realNucleus) {
    return gyromagneticRatio[realNucleus];
  }
  return null;
}
