import { Console } from '@woowacourse/mission-utils';

const Output = {
  printStartMent() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },
  printResult(scoreBoard) {
    if (scoreBoard.nothing) Console.print('낫싱');
    if (!scoreBoard.nothing)
      Console.print(`${scoreBoard.ball}볼 ${scoreBoard.strike}스트라이크`);
  },
  printEndMent() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default Output;
