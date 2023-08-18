import { SumResult } from './types';

/**
 * @description Логический вентиль И
 */
function and(entryA: number, entryB: number) {
  return entryA && entryB ? 1 : 0;
}

/**
 * @description Логический вентиль И-НЕ
 */
function andNot(entryA: number, entryB: number) {
  return entryA && entryB ? 0 : 1;
}

/**
 * @description Логический вентиль ИЛИ
 */
function or(entryA: number, entryB: number) {
  return entryA || entryB ? 1 : 0;
}

/**
 * @description Логический вентиль Искл-ИЛИ
 */
function exceptOr(entryA: number, entryB: number) {
  const orOut = or(entryA, entryB);
  const andNotOut = andNot(entryA, entryB);

  return and(orOut, andNotOut);
}

/**
 * @description Полусумматор
 */
export function halfAdd(entryA: number, entryB: number): SumResult {
  return {
    curry: and(entryA, entryB),
    sum: exceptOr(entryA, entryB),
  };
}
