import { Container } from "unstated";

export default class Game extends Container {
  state = {
    credits: 0
  };

  addCredits = number => {
    this.setState({
      credits: this.state.credits + number
    });
  };
}
