import PlayerNameValidation from './PlayerNameValidation.js';

const { checkIsBlank, checkIsOverFive } = PlayerNameValidation;

class Player {
  #name;

  #score;

  constructor(name) {
    this.validate(name);
    this.#name = name;
    this.#score = '';
  }

  validate(name) {
    if (checkIsBlank(name) || checkIsOverFive(name)) throw new Error('[ERROR]');
  }

  addScore() {
    this.#score += '-';
  }

  getStatus() {
    return { name: this.#name, score: this.#score };
  }
}

export default Player;
