import React from "react";
import addDays from "date-fns/add_days";
import addYears from "date-fns/add_years";
import { fetchDate } from "../utils/calendar";
import Box from "./box";

const calendarStyles = {
  position: "absolute",
  top: 0,
  right: 0
};

export default class Calendar extends React.PureComponent {
  state = {
    time: new Date(),
    date: new Date(2015, 1, 3),
    celebration: {}
  };

  componentDidMount() {
    this.getCalendaInfo();
    this.timeId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);

    this.dateId = setInterval(() => {
      this.setState(
        state => ({ date: addDays(state.date, 1) }),
        () => {
          this.getCalendaInfo();
        }
      );
    }, 60000);
  }

  componentWillUnmoumt() {
    clearInterval(this.timeId);
  }

  getCalendaInfo = async () => {
    const { date } = this.state;
    const celebration = await fetchDate(date);
    this.setState({ celebration });
  };

  renderCelebration(celebration) {
    if (!celebration) {
      return null;
    }
    return (
      <React.Fragment>
        <div
          style={{
            background: celebration.colour,
            height: "25px",
            width: "25px",
            textAlign: "center",
            lineHeight: "25px",
            float: "left",
            marginRight: "0.5rem"
          }}
        />
        <h2>{celebration.title}</h2>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Box style={calendarStyles}>
        {this.renderCelebration(this.state.celebration)}
        <div>{addYears(this.state.date, 103).toDateString()}</div>
        <div>{this.state.time.toTimeString().slice(0, 8)}</div>
      </Box>
    );
  }
}
