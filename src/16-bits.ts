/**
 * @description 16-битный сумматор на основе двух 8-битных сумматоров
 */

import compose from 'lodash.compose';
import partial from 'lodash.partial';
import { BitsAdderIO, add8bits } from './8-bits';

export function add16bits(entryA: number, entryB: number, input: BitsAdderIO = { curry: 0, sum: [] }): BitsAdderIO {
  const { curry, sum } = input;

  return compose(
    partial(add8bits, +entryA.toString().slice(0, 8), +entryB.toString().slice(0, 8)),
    partial(add8bits, +entryA.toString().slice(8), +entryB.toString().slice(8)),
  )({ curry, sum });
}
