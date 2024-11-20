import type { GyromagneticNucleus } from '.';
import { gyromagneticRatio } from '.';

export function getGyromagneticNucleus(
  nucleus: string,
): GyromagneticNucleus | null {
  if (gyromagneticRatio[nucleus as GyromagneticNucleus]) {
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
