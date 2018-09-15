import React from "react";
import Button from "./button";
import Box from "./box";
import Loader from "./loader";

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      processing: false,
      count: 1
    };
  }

  timer = () => {
    this.timerId = setTimeout(() => {
      this.props.addCredits(this.props.value);
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

  upgrade = upgradeCost => () => {
    this.props.removeCredits(upgradeCost);
    this.incrementCount();
  };

  incrementCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
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
    const { value, credits, getUpgradeCost } = this.props;
    const { count } = this.state;
    const upgradeCost = getUpgradeCost(value, count);
    const canAffordUpgrade = credits > upgradeCost;
    return (
      <Box style={{ maxWidth: "25%" }}>
        <h2>{this.props.name}</h2>
        <Loader loading={this.state.processing} time={this.props.time} />
        <Button disabled={this.state.processing} onClick={this.process}>
          Process {this.props.value} {this.props.name}s
        </Button>
        <Button
          disabled={!canAffordUpgrade}
          bottomRight
          onClick={this.upgrade(upgradeCost)}
        >
          Upgrade {this.props.name}s for {upgradeCost} credits
        </Button>
      </Box>
    );
  }
}
