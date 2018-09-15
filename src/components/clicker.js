import React from "react";
import Button from "./button";

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.timer = this.timer.bind(this);
    this.interval = this.interval.bind(this);
  }

  timer() {
    this.timer = setTimeout(() => {
      console.log(this.props.name);
    }, this.props.time);
  }

  interval() {
    this.interval = setInterval(() => {
      console.log(this.props.name);
    }, this.props.time);
  }

  componentDidMount() {
    if (this.props.auto) {
      this.interval();
    }
    this.timer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <Button onClick={this.props.click.buy}>
          Buy another of these things
        </Button>
        <Button onClick={this.props.click.get}>
          Get another of these things
        </Button>
      </div>
    );
  }
}
