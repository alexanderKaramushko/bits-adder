import { and, exceptOr } from './utils';

export type HalfAddOutput = {
  curry: number;
  sum: number;
};

/**
 * @description Полусумматор, расчет переноса без входного переноса
 */
export function halfAdd(entryA: number, entryB: number): HalfAddOutput {
  return {
    curry: and(entryA, entryB),
    sum: exceptOr(entryA, entryB),
  };
}
