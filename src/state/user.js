import { Container } from "unstated";

const LS_KEY = "userstate";

function save(state) {
  window.localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function load() {
  return JSON.parse(window.localStorage.getItem(LS_KEY));
}

export default class User extends Container {
  defaultState = {
    username: "",
    isRobot: false,
    isLoggedIn: false
  };

  constructor() {
    super();
    const loadedState = load();
    this.state = loadedState ? loadedState : defaultState;
  }

  setUsername = value => {
    this.setState({ username: value });
  };

  setIsRobot = value => {
    this.setState({ isRobot: value });
  };

  setIsLoggedIn = async value => {
    await this.setState(prev => ({ isLoggedIn: prev.username && value }));
    save(this.state);
  };

  logout = async () => {
    this.setState(this.defaultState);
    save(this.state);
  };
}
