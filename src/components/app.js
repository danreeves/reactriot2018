import React from "react";
import { Provider, Subscribe } from "unstated";
import Login from "./login";
import Game from "./game";
import UserState from "../state/user";

const logoStyle = {
  position: "absolute",
  fontFamily: "IMPACT",
  top: "40%",
  backgroundColor: "rgba(0,0,0,0.5)",
  webkitBackgroundClip: "text",
  color: "transparent",
  textShadow: "#00807f87 3px 5px 1px",
  fontSize: "100px",
  width: "100%",
  userSelect: "none",
  textAlign: "center"
};

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[UserState]}>
          {user => {
            if (!user.state.isLoggedIn) {
              return <Login />;
            }
            return (
              <React.Fragment>
                <span style={logoStyle}>DAN Corp.</span>
                <Game />
              </React.Fragment>
            );
          }}
        </Subscribe>
      </Provider>
    );
  }
}
