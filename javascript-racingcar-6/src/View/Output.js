import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

const Output = {
  printExecuteResultMent() {
    Console.print(OUTPUT_MESSAGE.executeResult);
  },

  printExecuteResult(results) {
    results.forEach((player) => {
      Console.print(`${player.name} : ${player.score}`);
    });
    Console.print(OUTPUT_MESSAGE.newLine);
  },

  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGE.finalWinner}${winner}`);
  },
};

export default Output;
