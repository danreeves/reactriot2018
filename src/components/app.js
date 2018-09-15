import React from "react";
import { Provider, Subscribe } from "unstated";
import UserState from "../state/user";
import Login from "./login";
import Game from "./game";
import Logo from "./Logo";

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
                <Logo />
                <Game />
              </React.Fragment>
            );
          }}
        </Subscribe>
      </Provider>
    );
  }
}
