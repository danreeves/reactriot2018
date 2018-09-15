import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import UserState from "../state/user";
import User from "../state/user";

export default function Game() {
  return (
    <Subscribe to={[UserState]}>
      {({ state }) => (
        <div>
          <Profile />
        </div>
      )}
    </Subscribe>
  );
}
