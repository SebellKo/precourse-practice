import RaceGame from '../Domains/RaceGame.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class RaceGameController {
  async playGame() {
    const carNames = await Input.getPlayerNames();
    const raceGame = new RaceGame(carNames);
    let tryNumber = await Input.getTryNumber();

    Output.printExecuteResultMent();
    while (tryNumber !== 0) {
      Output.printExecuteResult(raceGame.getExecuteResult());
      tryNumber -= 1;
    }
    Output.printWinner(raceGame.findWinner());
  }
}

export default RaceGameController;
