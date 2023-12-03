class WinningNumber {
  #winningNumber;

  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.getNumber();
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    const check = /^[0-9]+$/;
    if (!check.test(bonusNumber)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }
    if (!(bonusNumber >= 1 && bonusNumber <= 45)) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.');
    }
    if (this.#winningNumber.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  getWinningNumber() {
    return {
      winningNumber: this.#winningNumber,
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default WinningNumber;
