import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const data = readFileSync(
  join(import.meta.dirname, 'nmr_table_202504.csv'),
  'utf8',
);

const lines = data.split(/\r?\n/).filter(Boolean);
const headers = lines.shift().split('\t');

const results = {};
for (const line of lines) {
  const fields = line.split('\t');
  const nucleus = fields[1] + fields[2].replace(/^[DT]/, 'H');
  const gyromagneticRatio = Number(fields[8].replace(/\(.*/, ''));
  results[nucleus] = gyromagneticRatio;
}

writeFileSync(
  join(import.meta.dirname, '../src/gyromagneticRatioMHzT.ts'),
  `export const gyromagneticRatioMHzT = ${JSON.stringify(results)}`,
  'utf8',
);
console.log(results);
