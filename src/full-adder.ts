import { halfAdd } from './half-adder';
import { or } from './utils';

export type FullAddIO = {
  curry: number;
  sum: number[];
};

/**
 * @description Полный сумматор, расчет переноса с входным переносом
 */
// eslint-disable-next-line max-len
export function fullAdd(entryA: number, entryB: number, input: FullAddIO = { curry: 0, sum: [] }): FullAddIO {
  const { curry, sum } = input;

  const firstAdder = halfAdd(entryA, entryB);
  const secondAdder = halfAdd(firstAdder.sum, curry);

  return {
    curry: or(firstAdder.curry, secondAdder.curry),
    sum: [secondAdder.sum, ...sum],
  };
}
