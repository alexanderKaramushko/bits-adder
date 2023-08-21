import { and, exceptOr } from './utils';

export type HalfAddResult = {
  curryOut: number;
  sum: number;
};

/**
 * @description Полусумматор, расчет curryOut без curryIn
 */
export function halfAdd(entryA: number, entryB: number): HalfAddResult {
  return {
    curryOut: and(entryA, entryB),
    sum: exceptOr(entryA, entryB),
  };
}
