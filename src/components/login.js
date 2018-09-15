import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";

const formStyles = {
  width: "222px",
  height: "222px",
  position: "absolute",
  top: "50%",
  left: "50%"
};

export default function Login() {
  return (
    <Subscribe to={[UserState]}>
      {user => (
        <form onSubmit={e => e.preventDefault()}>
          <fieldset>
            <legend>Log on form:</legend>
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
            <button type="button" onClick={() => user.setIsLoggedIn(true)}>
              Okay
            </button>
          </fieldset>
        </form>
      )}
    </Subscribe>
  );
}
