class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const check = /^[0-9]+$/;
    if (check.test(numbers)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }
    if (numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.');
    }
  }

  // TODO: 추가 기능 구현

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
