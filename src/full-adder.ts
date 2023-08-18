import { halfAdd } from './half-adder';

export function fullAdd(bit1: number, bit2: number) {
  return halfAdd(bit1, bit2);
}
