import RaceGameController from './Controller/RaceGameController.js';

class App {
  async play() {
    const game = new RaceGameController();
    await game.playGame();
  }
}

export default App;
