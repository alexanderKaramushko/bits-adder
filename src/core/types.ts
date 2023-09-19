export type BinaryNumber = string;

/**
 * @description Вход и выход полных сумматоров, а следовательно и n-битовых сумматоров
 */
export type BitsAdderIO = {
  curry: number;
  sum: BinaryNumber;
  isSubstract?: boolean;
};
