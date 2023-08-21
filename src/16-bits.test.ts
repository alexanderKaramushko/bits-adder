import { add16bits } from './16-bits';

describe('Test 16-bit', () => {
  it('should sum up 16 bits without curry out', () => {
    expect(
      add16bits(1101001011010010, 1010100110101001, {
        curry: 0,
        sum: [],
      }),
    ).toEqual({
      curry: 1,
      sum: [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
    });
  });
});
