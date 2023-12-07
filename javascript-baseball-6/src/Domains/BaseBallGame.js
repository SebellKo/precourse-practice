import createRandomNumber from '../utils/createRandomNumber.js';

class BaseBallGame {
  #randomNumbers;

  constructor() {
    this.#randomNumbers = createRandomNumber();
  }

  play(numbers) {
    this.validateUserNumber(numbers);
    const userNumbers = Array.from(numbers, (number) => Number(number));
    const scoreBoard = this.compareNumbers(userNumbers);
    if (this.checkIsNothing(scoreBoard)) scoreBoard.nothing = true;

    return scoreBoard;
  }

  compareNumbers(numbers) {
    const scoreBoard = { ball: 0, strike: 0, nothing: false };
    numbers.forEach((number, index) => {
      const isInclude = this.#randomNumbers.includes(number);
      const isMatched =
        this.#randomNumbers.findIndex(
          (randomNumber) => randomNumber === number,
        ) === index;
      if (isInclude && isMatched) scoreBoard.strike += 1;
      if (isInclude && !isMatched) scoreBoard.ball += 1;
    });

    return scoreBoard;
  }

  checkIsEnd(endSign) {
    this.validateEndSign(endSign);
    return endSign === '1';
  }

  checkIsNothing(scoreBoard) {
    return scoreBoard.strike === 0 && scoreBoard.ball === 0;
  }

  validateUserNumber(numbers) {
    const check = /^[1-9]+$/;
    if (!check.test(numbers)) throw new Error('[ERROR]');

    if (numbers.length !== 3) throw new Error('[ERROR]');
  }

  validateEndSign(endSign) {
    if (endSign !== '1' && endSign !== '2') throw new Error('[ERROR]');
  }
}

export default BaseBallGame;
