import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";
import Button from "./button";
import Logo from "./logo";

const formStyles = {
  width: "500px",
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%)",
  color: "white",
  fontSize: "2rem",
  padding: "2rem",
  border: "1rem ridge beige",
  background: "lightslategray"
};

const legendStyles = {
  padding: "0.5rem 1rem",
  border: "1rem ridge beige",
  background: "lightslategray"
};

const logoType = {
  fontFamily: "Impact",
  color: "black"
};

const inputStyle = {
  border: "4px ridge beige",
  height: "2rem",
  fontSize: "1.25rem"
};

export default function Login() {
  return (
    <Subscribe to={[UserState]}>
      {user => (
        <React.Fragment>
          <Logo />
          <form onSubmit={e => e.preventDefault()}>
            <fieldset style={formStyles}>
              <legend style={legendStyles}>
                Log on to <span style={logoType}>❏DANCorp.</span>:
              </legend>
              <label>
                Username:{" "}
                <input
                  style={inputStyle}
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
              <Button
                onClick={() => user.setIsLoggedIn(true)}
                bottomRight
                style={{ fontSize: "1.5rem" }}
              >
                Okay
              </Button>
            </fieldset>
          </form>
        </React.Fragment>
      )}
    </Subscribe>
  );
}
