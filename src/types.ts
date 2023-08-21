/**
 * @description Вход и выход в виде последовательности битов
 */
export type BitsSum = number[];

/**
 * @description Вход и выход полных сумматоров, а следовательно и n-битовых сумматоров
 */
export type BitsAdderIO = {
  curry: number;
  sum: BitsSum;
};
