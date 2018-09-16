import { Container } from "unstated";
const LS_KEY = "gamestate";

function save(state) {
  window.localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function load() {
  return JSON.parse(window.localStorage.getItem(LS_KEY));
}

export default class Game extends Container {
  defaultState = {
    credits: 0,
    totalCredits: 0,
    maxCredits: 0
  };

  defaultClickers = [
    {
      time: 100,
      name: "Spanners",
      value: 1,
      unlockedAt: 0,
      upgradeCost: (value, count) => value * 1.21 ** count
    },
    {
      time: 3500,
      name: "Wrenches",
      value: 40,
      unlockedAt: 25,
      upgradeCost: (value, count) => value * 1.18 ** count
    },
    {
      time: 8000,
      name: "Logans",
      value: 90,
      unlockedAt: 250,
      upgradeCost: (value, count) => value * 1.16 ** count
    },
    {
      time: 12000,
      name: "Meat",
      value: 135,
      unlockedAt: 1500,
      upgradeCost: (value, count) => value * 1.15 ** count
    },
    {
      time: 20000,
      name: "Spiders!",
      value: 240,
      unlockedAt: 5000,
      upgradeCost: (value, count) => value * 1.14 ** count
    }
  ];

  constructor() {
    super();
    const loadedState = load();
    this.state = loadedState ? loadedState : this.defaultState;
    this.state.clickers = this.defaultClickers;
  }

  addCredits = number => {
    this.setState({
      credits: this.state.credits + number,
      totalCredits: this.state.totalCredits + number,
      maxCredits: Math.max(this.state.credits + number, this.state.maxCredits)
    });
    save(this.state);
  };

  removeCredits = number => {
    this.setState({
      credits: this.state.credits - number
    });
    save(this.state);
  };
}
