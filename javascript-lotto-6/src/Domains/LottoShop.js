import { Random } from '@woowacourse/mission-utils';

const LottoShop = {
  createRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },

  createLotto(tryNumber) {
    const lotto = [];
    for (let i = 0; i < tryNumber; i += 1) {
      lotto.push(this.createRandomNumber());
    }
    return lotto;
  },
};

export default LottoShop;
