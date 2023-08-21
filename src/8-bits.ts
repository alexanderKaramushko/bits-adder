import compose from 'lodash.compose';
import zip from 'lodash.zip';
import partial from 'lodash.partial';
import { fullAdd } from './full-adder';

export type BitsSum = number[];

export type BitsAdderIO = {
  curry: number;
  sum: BitsSum;
};

export function add8bits(entryA: number, entryB: number, input: BitsAdderIO = { curry: 0, sum: [] }): BitsAdderIO {
  const { curry, sum } = input;

  const bitsPairs = zip(
    [...entryA.toString()].map(Number),
    [...entryB.toString()].map(Number),
  );

  return compose(
    ...(
      bitsPairs
        .map(([bit1, bit2]) => partial(fullAdd, bit1 as number, bit2 as number))
    ),
  )({ curry, sum });
}
