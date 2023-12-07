import { Console } from '@woowacourse/mission-utils';

const Input = {
  async getUserNumber() {
    const userNumber = await Console.readLineAsync('숫자를 입력해 주세요 : ');
    return userNumber;
  },

  async getRestartInput() {
    const restartInput = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    return restartInput;
  },
};

export default Input;
