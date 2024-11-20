type Nuclei =
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
  | '129Xe'
  | '195Pt'
  | '199Hg'
  | '187Os'
  | '183W'
  | '125Te'
  | '123Te'
  | '119Sn'
  | '117Sn'
  | '115Sn'
  | '113Cd'
  | '111Cd'
  | '109Ag'
  | '107Ag'
  | '103Rh'
  | '89Y'
  | '77Se'
  | '203Tl'
  | '205Tl'
  | '207Pb';

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
  '195Pt': 58.385e6,
  '199Hg': 48.457916e6,
  '187Os': 6.192895e6,
  '183W': 11.282403e6,
  '125Te': -85.108404e6,
  '123Te': -70.59098e6,
  '119Sn': -100.317e6,
  '117Sn': -95.8879e6,
  '115Sn': -88.013e6,
  '113Cd': -59.609155e6,
  '111Cd': -56.983131e6,
  '109Ag': -12.518634e6,
  '77Se': 51.253857e6,
  '89Y': -13.162791e6,
  '103Rh': -8.468e6,
  '107Ag': -10.889181e6,
  '203Tl': 155.393338e6,
  '205Tl': 156.921808e6,
  '207Pb': 55.8046e6,
};

export function getGyromagneticRatio(nucleus: string): number | null {
  if (gyromagneticRatio[nucleus as Nuclei]) {
    return gyromagneticRatio[nucleus as Nuclei];
  }

  nucleus = nucleus.toLowerCase();
  if (nucleus === 'proton') return gyromagneticRatio['1H'];

  // we try to use only the numbers
  const nucleusNumber = nucleus.replace(/[^0-9]/g, '');
  if (!nucleusNumber) return null;
  for (const key in gyromagneticRatio) {
    if (key.replace(/[^0-9]/g, '') === nucleusNumber) {
      return gyromagneticRatio[key as Nuclei];
    }
  }

  return null;
}
