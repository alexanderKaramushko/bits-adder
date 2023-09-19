import { BitsAdderIO } from './core/types';
import { halfAdd } from './half-adder';
import { or } from './utils';

/**
 * @description Полный сумматор, расчет переноса с входным переносом
 */
// eslint-disable-next-line max-len
export function fullAdd(entryA: number, entryB: number, input?: BitsAdderIO): BitsAdderIO {
  const { curry = 0, sum = '' } = input ?? {};

  const firstAdder = halfAdd(entryA, entryB);
  const secondAdder = halfAdd(firstAdder.sum, curry);

  return {
    curry: or(firstAdder.curry, secondAdder.curry),
    sum: `${secondAdder.sum}${sum}`,
  };
}
