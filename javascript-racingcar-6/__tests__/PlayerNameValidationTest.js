import RaceGame from '../src/Domains/RaceGame';

describe('사용자 입력 유효성 검사', () => {
  test('사용자 입력 중복 검사', () => {
    const input = ['carA', 'carA'];
    expect(() => new RaceGame(input)).toThrow('[ERROR]');
  });

  test('사용자 입력 5자 이하 검사', () => {
    const input = ['carA', 'hyundaiCar'];
    expect(() => new RaceGame(input)).toThrow('[ERROR]');
  });

  describe('사용자 입력 공백 검사', () => {
    const inputs = [[['    ', 'carA']], [['', 'carA']]];
    test.each(inputs)('InValid 검사', (input) => {
      expect(() => new RaceGame(input)).toThrow('[ERROR]');
    });
  });
});
