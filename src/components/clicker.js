import React from "react";
import pretty from "../utils/pretty";
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
      this.props.addCredits(this.state.count * this.props.value);
      this.setState({ processing: false });
    }, this.props.time);
  };

  interval = () => {
    this.setState({ processing: true });
    this.intervalId = setTimeout(() => {
      this.props.addCredits(this.state.count * this.props.value);
      this.setState({ processing: false });
      setTimeout(() => {
        this.interval();
      }, 0);
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
      setTimeout(() => {
        this.interval();
      }, 0);
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
      <Box style={{ float: "left" }}>
        <h2>
          {this.props.name}{" "}
          <small>{this.state.count * this.props.value} credits</small>
        </h2>
        <Loader loading={this.state.processing} time={this.props.time} />
        <Button disabled={this.state.processing} onClick={this.process}>
          Process {this.state.count} {this.props.name}s
        </Button>
        <Button
          style={{ marginLeft: "1rem" }}
          disabled={!canAffordUpgrade}
          onClick={this.upgrade(upgradeCost)}
        >
          Upgrade {this.props.name}s for {pretty(upgradeCost)} credits
        </Button>
      </Box>
    );
  }
}
