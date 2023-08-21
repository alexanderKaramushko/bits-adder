/**
 * @description Логический вентиль И
 */
export function and(entryA: number, entryB: number) {
  return entryA && entryB ? 1 : 0;
}

/**
 * @description Логический вентиль И-НЕ
 */
export function andNot(entryA: number, entryB: number) {
  return entryA && entryB ? 0 : 1;
}

/**
 * @description Логический вентиль ИЛИ
 */
export function or(entryA: number, entryB: number) {
  return entryA || entryB ? 1 : 0;
}

/**
 * @description Логический вентиль Искл-ИЛИ
 */
export function exceptOr(entryA: number, entryB: number) {
  const orOut = or(entryA, entryB);
  const andNotOut = andNot(entryA, entryB);

  return and(orOut, andNotOut);
}

export function arrayFromNumber(value: number) {
  return [...value.toString()].map(Number);
}
