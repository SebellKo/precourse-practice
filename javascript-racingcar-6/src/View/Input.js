import { Console } from '@woowacourse/mission-utils';
import NumberValidation from '../utils/NumberValidation.js';
import INPUT_MESSAGE from '../constants/InputMessage.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';

const { checkIsNumber, checkIsPositive } = NumberValidation;

const Input = {
  async getPlayerNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.enterCarNames);

    return carNames.split(',');
  },

  async getTryNumber() {
    const tryNumber = await Console.readLineAsync(INPUT_MESSAGE.enterTryNumber);

    if (!checkIsNumber(tryNumber) || !checkIsPositive(tryNumber))
      throw new Error(ERROR_MESSAGE.inValidNumber);

    return tryNumber;
  },
};

export default Input;
