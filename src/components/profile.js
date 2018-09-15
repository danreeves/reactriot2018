import React from "react";
import { Subscribe } from "unstated";
import UserState from "../state/user";

export default function Profile() {
  return (
    <Subscribe to={[UserState]}>
      {({ state }) => (
        <img
          src={`https://robohash.org/${state.username}?set=set${
            state.isRobot ? 1 : 2
          }`}
          alt="This is you"
        />
      )}
    </Subscribe>
  );
}
