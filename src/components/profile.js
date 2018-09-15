import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";
import Button from "./button";
import Box from "./box";

const profileStyles = {
  width: "360px",
  position: "absolute",
  bottom: 0,
  right: 0
};

const imageStyles = {
  border: "5px ridge beige",
  float: "left",
  marginRight: "0.5rem",
  background: "lightgrey"
};

const listStyle = {
  display: "block",
  margin: 0,
  padding: 0,
  listStyle: "none",
  float: "right",
  width: "150px"
};

export default class Profile extends React.PureComponent {
  render() {
    return (
      <Subscribe to={[UserState]}>
        {({ state, logout }) => (
          <Box style={profileStyles}>
            <img
              height={150}
              width={150}
              style={imageStyles}
              src={`https://robohash.org/${
                state.username
              }?size=150x150&set=set${state.isRobot ? 1 : 2}`}
              alt="This is you"
              title="This is you"
            />
            <ul style={listStyle}>
              <li title="Common name">
                <strong>Name:</strong>
                <i> {state.username}</i>
              </li>
              <li title="Universe Citizen Identifier">
                <strong>ID:</strong>
                <i>
                  {" "}
                  {state.username
                    .split("")
                    .map(c => c.charCodeAt(0))
                    .join("")
                    .slice(0, state.username.length)}
                </i>
              </li>
              <li
                title={`${
                  state.isRobot ? "Internal Error: 422" : "Life expectancy: 0"
                }`}
              >
                <strong>Robot:</strong>
                <i> {String(state.isRobot)}</i>
              </li>
              <li title="Employees are expected to be online at all times">
                <strong>Online:</strong>
                <i> true</i>
              </li>
              <li title="Important messages: 0">
                <strong>Inbox:</strong>
                <i>{Number.MIN_SAFE_INTEGER}</i>
              </li>
            </ul>
            <Button
              bottomRight
              onClick={logout}
              title="Note: Logging out is a punishable offense"
            >
              Delete
            </Button>
          </Box>
        )}
      </Subscribe>
    );
  }
}
