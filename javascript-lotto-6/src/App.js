import LottoGameController from './Controller/LottoGameController.js';
import InputView from './View/Input.js';
import OutputView from './View/Output.js';

class App {
  #inputView;

  #outputView;

  #gameController;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#gameController = new LottoGameController(
      this.#inputView,
      this.#outputView,
    );
  }

  async play() {
    this.#gameController.play();
  }
}

export default App;
