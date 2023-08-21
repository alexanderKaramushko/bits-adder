import { SumResult } from './types';
import { and, exceptOr } from './utils';

/**
 * @description Полусумматор
 */
export function halfAdd(entryA: number, entryB: number): SumResult {
  return {
    curryOut: and(entryA, entryB),
    sum: exceptOr(entryA, entryB),
  };
}
