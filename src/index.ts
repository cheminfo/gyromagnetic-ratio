export type Nuclei =
  | '1H'
  | '2H'
  | '3H'
  | '3He'
  | '7Li'
  | '13C'
  | '14N'
  | '15N'
  | '17O'
  | '19F'
  | '23Na'
  | '27Al'
  | '29Si'
  | '31P'
  | '57Fe'
  | '63Cu'
  | '67Zn'
  | '129Xe';

type GyromagneticRatio = {
  [key in Nuclei]: number;
};

export const gyromagneticRatio: GyromagneticRatio = {
  '1H': 267.52218744e6,
  '2H': 41.065e6,
  '3H': 285.3508e6,
  '3He': -203.789e6,
  '7Li': 103.962e6,
  '13C': 67.28284e6,
  '14N': 19.331e6,
  '15N': -27.116e6,
  '17O': -36.264e6,
  '19F': 251.662e6,
  '23Na': 70.761e6,
  '27Al': 69.763e6,
  '29Si': -53.19e6,
  '31P': 108.291e6,
  '57Fe': 8.681e6,
  '63Cu': 71.118e6,
  '67Zn': 16.767e6,
  '129Xe': -73.997e6,
};

export function getGyromagneticRatio(nucleus: string) {
  if (gyromagneticRatio[nucleus as Nuclei])
    return gyromagneticRatio[nucleus as Nuclei];

  nucleus = nucleus.toLowerCase();
  if (nucleus === 'proton') return gyromagneticRatio['1H'];

  // we try to use only the numbers
  const nucleusNumber = nucleus.replace(/[^0-9]/g, '');
  if (!nucleusNumber) return null;
  for (const key in gyromagneticRatio) {
    if (key.includes(nucleusNumber)) return gyromagneticRatio[key as Nuclei];
  }

  return null;
}
