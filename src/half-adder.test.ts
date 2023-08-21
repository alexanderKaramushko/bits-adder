import { halfAdd } from './half-adder';

describe('Test half-adder', () => {
  it('should sum up bits without curry out', () => {
    expect(halfAdd(1, 0)).toEqual({
      curryOut: 0,
      sum: 1,
    });
  });

  it('should sum up bits with curry out', () => {
    expect(halfAdd(1, 1)).toEqual({
      curryOut: 1,
      sum: 0,
    });
  });
});
