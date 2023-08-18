import { fullAdd } from './full-adder';

describe('Test full-adder', () => {
  it('should sum up bits without curry in', () => {
    expect(fullAdd(1, 0, 0)).toEqual({
      curry: 0,
      sum: 1,
    });
  });

  it('should sum up bits with curry out', () => {
    expect(fullAdd(1, 1, 0)).toEqual({
      curry: 1,
      sum: 0,
    });
  });

  it('should sum up bits with curry in and without curry out', () => {
    expect(fullAdd(1, 0, 1)).toEqual({
      curry: 0,
      sum: 1,
    });
  });

  it('should sum up bits with curry in and with curry out', () => {
    expect(fullAdd(1, 0, 1)).toEqual({
      curry: 0,
      sum: 1,
    });
  });
});
