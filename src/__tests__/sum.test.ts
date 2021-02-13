import { sum } from '../sum';

describe('Testes das somas', () => {
  it('should 1 + 2 to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should 4 + 6 to be equal 10', () => {
    expect(sum(4, 6)).toBe(10);
  });
});
