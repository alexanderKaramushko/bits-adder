import { add8bits } from './8-bits';

describe('Test 8-bit', () => {
  it('should sum up 8 bits without curry out', () => {
    expect(
      add8bits(11010010, 10101001, {
        curry: 0,
        sum: [],
      }),
    ).toEqual({
      curry: 1,
      sum: [0, 1, 1, 1, 1, 0, 1, 1],
    });
  });

  it('should sum up 8 bits with curry in', () => {
    expect(
      add8bits(11010010, 10101000, {
        curry: 1,
        sum: [],
      }),
    ).toEqual({
      curry: 1,
      sum: [0, 1, 1, 1, 1, 0, 1, 1],
    });
  });
});
