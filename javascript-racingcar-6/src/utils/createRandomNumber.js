import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_RANGE } from '../constants/Range.js';

const createRandomNumber = () =>
  Random.pickNumberInRange(RANDOM_NUMBER_RANGE.min, RANDOM_NUMBER_RANGE.max);

export default createRandomNumber;
