import React from "react";
import { Provider, Subscribe } from "unstated";
import Login from "./login";
import Game from "./game";
import UserState from "../state/user";

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[UserState]}>
          {user => {
            if (!user.state.isLoggedIn) {
              return <Login />;
            }
            return <Game />;
          }}
        </Subscribe>
      </Provider>
    );
  }
}
