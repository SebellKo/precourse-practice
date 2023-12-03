import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printLotto(tryNumber, lotto) {
    Console.print(`${tryNumber}개를 구매했습니다.`);
    lotto.forEach((number) => {
      Console.print(`[${number.join(', ')}]`);
    });
    Console.print('');
  }

  printResult(scoreBoard, profit) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${scoreBoard.fifth}개
4개 일치 (50,000원) - ${scoreBoard.fourth}개
5개 일치 (1,500,000원) - ${scoreBoard.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) -${scoreBoard.second}개
6개 일치 (2,000,000,000원) - ${scoreBoard.first}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  printError(error) {
    Console.print(`${error}`);
  }
}

export default OutputView;
