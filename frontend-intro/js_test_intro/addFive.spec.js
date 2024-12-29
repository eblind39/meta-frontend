const addFive = require('./addFive');

describe('addFive', () => {
  it('should add 5 to the given number', () => {
    expect(addFive(5)).toBe(10);
  });
});