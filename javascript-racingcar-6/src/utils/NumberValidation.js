const NumberValidation = {
  checkIsNumber(tryNumber) {
    const check = /^[0-9]+$/;

    return check.test(tryNumber);
  },

  checkIsPositive(tryNumber) {
    return tryNumber > 0;
  },
};

export default NumberValidation;
