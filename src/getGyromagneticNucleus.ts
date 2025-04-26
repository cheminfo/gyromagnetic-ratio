import type { GyromagneticNucleus } from '.';
import { gyromagneticRatio } from '.';

/**
 * Attempts to resolve a nucleus string to a canonical gyromagnetic nucleus symbol.
 *
 * @param nucleus - The name or symbol of the nucleus (e.g., '1H', 'proton').
 * @returns The canonical nucleus symbol if found, otherwise null.
 */
export function getGyromagneticNucleus(
  nucleus: string,
): GyromagneticNucleus | null {
  if (nucleus in gyromagneticRatio) {
    return nucleus as GyromagneticNucleus;
  }

  nucleus = nucleus.toLowerCase();
  if (nucleus === 'proton') return '1H';

  // we try to use only the numbers
  const nucleusNumber = nucleus.replaceAll(/[^0-9]/g, '');
  if (!nucleusNumber) return null;
  for (const key in gyromagneticRatio) {
    if (key.replaceAll(/[^0-9]/g, '') === nucleusNumber) {
      return key as GyromagneticNucleus;
    }
  }
  return null;
}
