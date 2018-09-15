import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";
import Button from "./button";

const formStyles = {
  width: "500px",
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%)",
  color: "white",
  fontSize: "2rem",
  padding: "2rem",
  borderStyle: "ridge",
  borderWidth: "0.5rem"
};

const legendStyles = {
  padding: "0.5rem 1rem",
  border: "0.5rem ridge lightgrey"
};

export default function Login() {
  return (
    <Subscribe to={[UserState]}>
      {user => (
        <form onSubmit={e => e.preventDefault()}>
          <fieldset style={formStyles}>
            <legend style={legendStyles}>Log on form:</legend>
            <label>
              Username:{" "}
              <input
                type="text"
                value={user.state.username}
                onChange={event => user.setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              Are you a robot?{" "}
              <input
                type="checkbox"
                value={user.state.isRobot}
                onChange={() => user.setIsRobot(!user.state.isRobot)}
              />
            </label>
            <br />
            <Button onClick={() => user.setIsLoggedIn(true)}>Okay</Button>
          </fieldset>
        </form>
      )}
    </Subscribe>
  );
}
