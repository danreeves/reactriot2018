import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";

const profileStyles = {
  border: "1rem ridge beige",
  maxWidth: "25%",
  position: "absolute",
  bottom: 0,
  right: 0,
  padding: "0.5rem",
  background: "lightslategray"
};

const imageStyles = {
  maxWidth: "100%",
  border: "5px ridge beige",
  float: "left",
  marginRight: "0.5rem",
  background: "lightgrey"
};

const logoutStyles = {
  position: "absolute",
  bottom: "0.5rem",
  right: "0.5rem",
  border: "5px ridge beige",
  background: "lightgrey",
  cursor: "pointer",
  fontWeight: "bold"
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
        <div style={profileStyles}>
          <img
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
              <strong>Robot:</strong>
              <i> {String(state.isRobot)}</i>
            </li>
            <li>
              <strong>Online:</strong>
              <i> true</i>
            </li>
            <li>
              <strong>Since:</strong>
              <i> {Math.floor(Math.random() * 1000)}</i>
            </li>
          </ul>
          <button style={logoutStyles} type="button" onClick={logout}>
            Delete
          </button>
        </div>
      )}
    </Subscribe>
  );
}
