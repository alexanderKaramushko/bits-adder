import compose from 'lodash.compose';
import zip from 'lodash.zip';
import partial from 'lodash.partial';
import { fullAdd } from './full-adder';
import { arrayFromNumber } from './utils';
import { BitsAdderIO } from './types';

export function add8bits(entryA: number, entryB: number, input: BitsAdderIO = { curry: 0, sum: [] }): BitsAdderIO {
  const { curry, sum } = input;

  const bitsPairs = zip(
    arrayFromNumber(entryA),
    arrayFromNumber(entryB),
  );

  return compose(
    ...(
      bitsPairs
        .map(([bit1, bit2]) => partial(fullAdd, bit1 as number, bit2 as number))
    ),
  )({ curry, sum });
}
