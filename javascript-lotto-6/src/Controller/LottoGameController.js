import LottoShop from '../Domains/LottoShop.js';
import User from '../Domains/User.js';
import WinningNumber from '../Domains/WinningNumber.js';
import Lotto from '../Lotto.js';

class LottoGameController {
  #inputView;

  #outputView;

  constructor(input, output) {
    this.#inputView = input;
    this.#outputView = output;
  }

  async play() {
    const { user, purchaseMoney } = await this.configUser();
    const lotto = user.buyLotto();

    this.#outputView.printLotto(purchaseMoney / 1000, lotto);
    const winningNumber = await this.configWinningNumber();
    const lottoShop = new LottoShop(winningNumber);

    const { scoreBoard, profit } = user.getScoreBoard(lottoShop);
    this.#outputView.printResult(scoreBoard, profit);
  }

  async configUser() {
    try {
      const purchaseMoney = await this.#inputView.getPurchaseMoney();
      const user = new User(purchaseMoney);
      return { user, purchaseMoney };
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.configUser();
    }
  }

  async configWinningNumber() {
    try {
      const winNumber = new Lotto(await this.#inputView.getWinNumber());

      const bonusNumber = await this.#inputView.getBonusNumber();
      const winningNumber = new WinningNumber(winNumber, bonusNumber);

      return winningNumber;
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.configWinningNumber();
    }
  }
}

export default LottoGameController;
