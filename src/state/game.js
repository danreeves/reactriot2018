import { Container } from "unstated";

export default class Game extends Container {
  state = {
    things: 0
  };

  addThings = number => {
    this.setState({
      things: this.state.things + number
    });
  };
}
