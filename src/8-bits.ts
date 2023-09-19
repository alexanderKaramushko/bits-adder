import { invertEntry, sumUp } from './core';
import { BinaryNumber, BitsAdderIO } from './core/types';

/**
   * @description 8-битовый сумматор, композиция полных сумматоров
   *
   * @todo Протестировать кейсы переполнения/исчезновения разрядов при вычитании
*/
export function add8bits(entryA: BinaryNumber, entryB: BinaryNumber, input: BitsAdderIO): BitsAdderIO {
  const { isSubstract } = input;

  return isSubstract
    ? sumUp(entryA, invertEntry(entryB), { ...input, curry: 1 })
    : sumUp(entryA, entryB, input);
}
