import { Container } from "unstated";

export default class Game extends Container {
  state = {
    credits: 0,
    totalCredits: 0,
    maxCredits: 0,
    clickers: [
      {
        time: 100,
        name: "ello",
        value: 1,
        unlockedAt: 0,
        upgradeCost: (value, count) => value * 1.21 ** count
      },
      {
        time: 3500,
        name: "lol",
        value: 40,
        unlockedAt: 25,
        upgradeCost: (value, count) => value * 1.18 ** count
      },
      {
        time: 8000,
        name: "lol",
        value: 90,
        unlockedAt: 250,
        upgradeCost: (value, count) => value * 1.16 ** count
      },
      {
        time: 12000,
        name: "lol",
        value: 135,
        unlockedAt: 1500,
        upgradeCost: (value, count) => value * 1.15 ** count
      },
      {
        time: 20000,
        name: "lol",
        value: 240,
        unlockedAt: 5000,
        upgradeCost: (value, count) => value * 1.14 ** count
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
