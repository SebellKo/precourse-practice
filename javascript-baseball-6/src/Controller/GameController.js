import BaseBallGame from '../Domains/BaseBallGame.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class GameController {
  #baseBallGame;

  initialGame() {
    this.#baseBallGame = new BaseBallGame();
  }

  async play(isGreet = true) {
    this.initialGame();
    if (isGreet) Output.printStartMent();
    let scoreBoard = {};
    while (scoreBoard.strike !== 3) {
      const userNumber = await Input.getUserNumber();
      scoreBoard = this.#baseBallGame.play(userNumber);
      Output.printResult(scoreBoard);
    }
    Output.printEndMent();
    const keepSign = await Input.getRestartInput();
    if (this.#baseBallGame.checkIsEnd(keepSign)) await this.play(false);
  }
}

export default GameController;
