import createRandomNumber from '../utils/createRandomNumber';
import WinningNumber from './WinningNumber';

class LottoShop {
  static createLotto(tryNumber) {
    const lotto = [];
    for (let i = 0; i < tryNumber; i += 1) {
      lotto.push(createRandomNumber());
    }
    return lotto.sort((a, b) => a - b);
  }

  static createScoreBoard(lotto, money) {
    const scoreBoard = this.calculateScore(lotto);
    const totalProfit = this.calculateProfit(money, scoreBoard);

    return {
      scoreBoard,
      totalProfit,
    };
  }

  calculateScore(lotto) {
    const scoreBoard = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    const { winningNumber, bonusNumber } = WinningNumber.getWinningNumber();
    lotto.forEach((numbers) => {
      const matchCount = this.compareNumber(numbers, winningNumber);
      const grade = this.applyScoreBoard(matchCount, bonusNumber, numbers);
      if (grade !== 'none') scoreBoard[grade] += 1;
    });
    return scoreBoard;
  }

  applyScoreBoard(matchCount, bonusNunber, numbers) {
    switch (matchCount) {
      case 6:
        return 'first';
      case 5:
        if (this.checkIncludeBonusNumber(numbers, bonusNunber)) return 'second';
        return 'third';
      case 4:
        return 'fourth';
      case 3:
        return 'fifth';
      default:
        return 'none';
    }
  }

  calculateProfit(money, scoreBoard) {
    let totalProfit = 0;
    Object.entries(scoreBoard).forEach((grade) => {
      totalProfit += this.addProfit(grade);
    });

    return ((totalProfit / money) * 100).toFixed(1);
  }

  addProfit(grade) {
    const prizeGrade = grade[0];
    const matchNumber = grade[1];

    const prize = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };

    return matchNumber * prize[prizeGrade];
  }

  compareNumber(numbers, winningNumber) {
    return numbers.filter((number) =>
      winningNumber.winningNumber.includes(number),
    ).length;
  }

  checkIncludeBonusNumber(numbers, bonusNumber) {
    return numbers.includes(bonusNumber);
  }
}

export default LottoShop;
