import { getGyromagneticNucleus, gyromagneticRatio } from '.';

/**
 * Returns the gyromagnetic ratio for a given nucleus string.
 * @param nucleus - The name or symbol of the nucleus (e.g., '1H', 'proton').
 * @returns The gyromagnetic ratio for the nucleus, or null if not found.
 */
export function getGyromagneticRatio(nucleus: string): number | null {
  const realNucleus = getGyromagneticNucleus(nucleus);
  if (realNucleus) {
    return gyromagneticRatio[realNucleus];
  }
  return null;
}
