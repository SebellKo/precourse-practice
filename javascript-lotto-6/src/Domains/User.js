import LottoShop from './LottoShop';

class User {
  #lotto;

  #profit;

  #money;

  constructor(money) {
    this.#validateMoney(money);
    this.#money = money;
  }

  #validateMoney(money) {
    if (!(money % 1000 === 0)) {
      throw new Error('[ERROR] 1000원 단위로 입력해 주세요.');
    }
    const check = /^[0-9]+$/;
    if (check.test(money)) {
      throw new Error('[ERROR] 숫자만 입력해 주세요.');
    }
  }

  buyLotto() {
    this.#lotto = LottoShop.createLotto(this.#money / 1000);
  }
}

export default User;
