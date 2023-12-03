import { Random } from '@woowacourse/mission-utils';

const createRandomNumber = () => Random.pickUniqueNumbersInRange(1, 45, 6);

export default createRandomNumber;
