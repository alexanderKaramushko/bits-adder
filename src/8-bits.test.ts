import { add8bits } from './8-bits';

describe('Test 8-bit', () => {
  it('should sum up 8 bits without curry out', () => {
    expect(
      add8bits('11010010', '10101001', {
        curry: 0,
        sum: '',
      }),
    ).toEqual({
      curry: 1,
      sum: '01111011',
    });
  });

  it('should sum up 8 bits with curry in', () => {
    expect(
      add8bits('11010010', '10101000', {
        curry: 1,
        sum: '',
      }),
    ).toEqual({
      curry: 1,
      sum: '01111011',
    });
  });

  it('should substract with one`s complement', () => {
    expect(
      add8bits('11111101', '10110000', {
        curry: 0,
        isSubstract: true,
        sum: '',
      }),
    ).toEqual({
      curry: 1,
      sum: '01001101',
    });
  });
});
