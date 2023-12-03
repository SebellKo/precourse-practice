import { Console } from '@woowacourse/mission-utils';

class View {
  static getPurchaseMoney() {
    const money = Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return money;
  }

  static getWinNumber() {
    const number = Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('');
    return number;
  }

  static getBonusNumber() {
    const bonusNumber = Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('');
    return bonusNumber;
  }
}

export default View;
