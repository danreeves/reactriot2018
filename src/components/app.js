import React from "react";
import { Provider, Subscribe } from "unstated";
import Login from "./login";
import UserState from "../state/user";

export default function App() {
  return (
    <Provider>
      <Subscribe to={[UserState]}>
        {user => {
          if (!user.state.isLoggedIn) {
            return <Login />;
          }
          return <h1>Hello {user.state.username}</h1>;
        }}
      </Subscribe>
    </Provider>
  );
}
