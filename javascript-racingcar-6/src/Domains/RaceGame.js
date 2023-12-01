import Player from './Player.js';
import createRandomNumber from '../utils/createRandomNumber.js';
import { AVAILABLE_MOVE } from '../constants/Range.js';
import PlayerNameValidation from './PlayerNameValidation.js';

class RaceGame {
  #players;

  constructor(playerNames) {
    this.validate(playerNames);
    this.#players = playerNames.map((name) => new Player(name));
  }

  validate(names) {
    PlayerNameValidation.checkIsDuplicated(names);
  }

  executeGame() {
    this.#players.forEach((player) => {
      if (this.checkCanMove()) player.addScore();
    });
  }

  getExecuteResult() {
    this.executeGame();
    const executeResult = this.#players.map((player) => player.getStatus());
    return executeResult;
  }

  findWinner() {
    const scoreBoard = this.#players.map((player) => player.getStatus());
    const scoreLengths = scoreBoard.map((player) => player.score.length);
    const winnerScore = Math.max(...scoreLengths);
    const winners = scoreBoard
      .filter((player) => player.score.length === winnerScore)
      .map((player) => player.name);

    return winners.join(', ');
  }

  checkCanMove() {
    return createRandomNumber() >= AVAILABLE_MOVE;
  }
}

export default RaceGame;
