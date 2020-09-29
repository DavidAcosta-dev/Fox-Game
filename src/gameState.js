const gameState = {
  current: "INIT",
  clock: 1,
  tick: () => {
    this.clock++;
    console.log(`game.clock: ${this.clock}`);
    return this.clock;
  }
};

export default gameState;
