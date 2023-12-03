import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getPurchaseMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    Console.print('');
    return money;
  }

  async getWinNumber() {
    const number = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('');
    return number.split(',');
  }

  async getBonusNumber() {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('');
    return bonusNumber;
  }
}

export default InputView;
