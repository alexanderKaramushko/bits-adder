import { invertEntry, sumUp } from './core';
import { BinaryNumber, BitsAdderIO } from './core/types';

/**
   * @description 8-битовый сумматор, композиция полных сумматоров
   *
   * @todo Протестировать кейсы переполнения/исчезновения разрядов при вычитании,
   * то есть проверка на результат > 127 или < -128.
   *
   * Надо добавить флаг на случай переполнения и флаг на случай отрицательного числа.
   * Если на выходе curry равен 0, то значит переполнения не было и результат отрицательный.
   * Если старший бит отличается от просуммированных бито, то значит произошло исчезновение.
*/
export function add8bits(entryA: BinaryNumber, entryB: BinaryNumber, input: BitsAdderIO): BitsAdderIO {
  const { isSubstract } = input;

  return isSubstract
    ? sumUp(entryA, invertEntry(entryB), { ...input, curry: 1 })
    : sumUp(entryA, entryB, input);
}
