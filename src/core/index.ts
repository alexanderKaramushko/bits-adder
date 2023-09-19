import compose from 'lodash.compose';
import zip from 'lodash.zip';
import partial from 'lodash.partial';
import { fullAdd } from '../full-adder';
import { invert } from '../utils';
import { BinaryNumber, BitsAdderIO } from './types';

export function getBitsAdders(entryA: BinaryNumber, entryB: BinaryNumber) {
  const bitsPairs = zip(
    entryA.split(''),
    entryB.split(''),
  ) as BinaryNumber[][];

  return bitsPairs
    .map(([bit1, bit2]) => partial(fullAdd, +bit1, +bit2));
}

export function invertEntry(entry: BinaryNumber) {
  return entry.split('').map((strNumber) => invert(+strNumber)).join('');
}

export function sumUp(entryA: BinaryNumber, entryB: BinaryNumber, input: BitsAdderIO): BitsAdderIO {
  const { curry = 0, sum = '' } = input;

  return compose(
    ...getBitsAdders(entryA, entryB),
  )({ curry, sum });
}
