import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";

const profileStyles = {
  border: "1rem ridge purple",
  maxWidth: "15%",
  position: "absolute",
  bottom: 0,
  right: 0,
  padding: "0.5rem"
};

const imageStyles = {
  maxWidth: "100%",
  border: "2px ridge blue"
};

export default function Profile() {
  return (
    <Subscribe to={[UserState]}>
      {({ state }) => (
        <div style={profileStyles}>
          <h1>Hello, {state.username}</h1>
          <img
            style={imageStyles}
            src={`https://robohash.org/${state.username}?set=set${
              state.isRobot ? 1 : 2
            }`}
            alt="This is you"
          />
        </div>
      )}
    </Subscribe>
  );
}
