import ERROR_MESSAGE from '../constants/ErrorMessage.js';

const PlayerNameValidation = {
  checkIsOverFive(carName) {
    if (carName.length > 5) throw new Error(ERROR_MESSAGE.inValidLength);
  },

  checkIsDuplicated(carNames) {
    if (new Set(carNames).size !== carNames.length)
      throw new Error(ERROR_MESSAGE.inValidDuplicated);
  },

  checkIsBlank(carName) {
    if (carName.trim().length === 0)
      throw new Error(ERROR_MESSAGE.inValidBlank);
  },
};

export default PlayerNameValidation;
