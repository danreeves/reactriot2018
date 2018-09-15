import React from "react";
import Button from "./button";
import Box from "./box";
import Loader from "./loader";

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false
    };
  }

  timer = () => {
    this.timerId = setTimeout(() => {
      this.props.addCredits(this.props.increment);
      this.setState({ processing: false });
    }, this.props.time);
  };

  interval = () => {
    this.intervalId = setInterval(() => {
      console.log(this.props.name);
    }, this.props.time);
  };

  process = () => {
    this.setState({ processing: true });
    this.timer();
  };

  componentDidMount() {
    if (this.props.auto) {
      this.interval();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Box>
        <h2>{this.props.name}</h2>
        <Loader loading={this.state.processing} time={this.props.time} />
        <Button disabled={this.state.processing} onClick={this.process}>
          Process {this.props.increment} {this.props.name}s
        </Button>
        <Button bottomRight onClick={() => {}}>
          Upgrade {this.props.name}s
        </Button>
      </Box>
    );
  }
}
