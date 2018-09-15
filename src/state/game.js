import { Container } from "unstated";

export default class Game extends Container {
  state = {
    credits: 0,
    clickers: [
      {
        time: 0,
        name: "ello",
        value: 1,
        unlockedAt: 0,
        upgradeCost: (value, count) => value * 1.15 ** count
      },
      {
        time: 1000,
        name: "lol",
        value: 10,
        unlockedAt: 25
      }
    ]
  };

  addCredits = number => {
    this.setState({
      credits: this.state.credits + number
    });
  };

  removeCredits = number => {
    this.setState({
      credits: this.state.credits - number
    });
  };
}
