import { Container } from "unstated";

export default class Game extends Container {
  state = {
    credits: 0,
    totalCredits: 0,
    maxCredits: 0,
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
        value: 5,
        unlockedAt: 25,
        upgradeCost: (value, count) => value * 1.55 ** count
      }
    ]
  };

  addCredits = number => {
    this.setState({
      credits: this.state.credits + number,
      totalCredits: this.state.totalCredits + number,
      maxCredits: Math.max(this.state.credits + number, this.state.maxCredits)
    });
  };

  removeCredits = number => {
    this.setState({
      credits: this.state.credits - number
    });
  };
}
