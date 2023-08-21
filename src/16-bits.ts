import compose from 'lodash.compose';
import partial from 'lodash.partial';
import { add8bits } from './8-bits';
import { BitsAdderIO } from './types';

/**
 * @description 16-битный сумматор, композиция 8-битовый сумматоров
 */
export function add16bits(entryA: number, entryB: number, input: BitsAdderIO = { curry: 0, sum: [] }): BitsAdderIO {
  const { curry, sum } = input;

  return compose(
    partial(add8bits, +entryA.toString().slice(0, 8), +entryB.toString().slice(0, 8)),
    partial(add8bits, +entryA.toString().slice(8), +entryB.toString().slice(8)),
  )({ curry, sum });
}
