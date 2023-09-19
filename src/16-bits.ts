import compose from 'lodash.compose';
import partial from 'lodash.partial';
import { add8bits } from './8-bits';
import { BinaryNumber, BitsAdderIO } from './core/types';

/**
 * @description 16-битный сумматор, композиция 8-битовый сумматоров
 */
// eslint-disable-next-line max-len
export function add16bits(entryA: BinaryNumber, entryB: BinaryNumber, input: BitsAdderIO): BitsAdderIO {
  const { curry = 0, sum = '' } = input;

  return compose(
    partial(add8bits, entryA.toString().slice(0, 8), entryB.toString().slice(0, 8)),
    partial(add8bits, entryA.toString().slice(8), entryB.toString().slice(8)),
  )({ curry, sum });
}
