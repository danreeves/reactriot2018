import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";
import Button from "./button";
import Box from "./box";

const profileStyles = {
  maxWidth: "25%",
  position: "absolute",
  bottom: 0,
  right: 0
};

const imageStyles = {
  maxWidth: "100%",
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
  float: "right"
};

export default function Profile() {
  return (
    <Subscribe to={[UserState]}>
      {({ state, logout }) => (
        <Box style={profileStyles}>
          <img
            height={150}
            width={150}
            style={imageStyles}
            src={`https://robohash.org/${state.username}?size=150x150&set=set${
              state.isRobot ? 1 : 2
            }`}
            alt="This is you"
            title="This is you"
          />
          <ul style={listStyle}>
            <li>
              <strong>Name:</strong>
              <i> {state.username}</i>
            </li>
            <li>
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
            <li>
              <strong>Robot:</strong>
              <i> {String(state.isRobot)}</i>
            </li>
            <li>
              <strong>Online:</strong>
              <i> true</i>
            </li>
          </ul>
          <Button bottomRight onClick={logout}>
            Delete
          </Button>
        </Box>
      )}
    </Subscribe>
  );
}
