import { Container } from "unstated";

export default class Game extends Container {
  state = {
    things: 0
  };

  addOneThing() {
    this.setState({
      things: this.state.things + 1
    });
  }
}
