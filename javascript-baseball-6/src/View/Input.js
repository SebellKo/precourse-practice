import { Console } from '@woowacourse/mission-utils';

const Input = {
  getUserNumber() {
    Console.readLineAsync('숫자를 입력해 주세요 : ');
  },

  getRestartInput() {
    Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
  },
};

export default Input;
