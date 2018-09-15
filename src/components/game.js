import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import GameState from "../state/game";

export default function Game() {
  return (
    <Subscribe to={[GameState]}>
      {game => (
        <div>
          <h1>You have {game.state.things} things!</h1>
          <button onClick={() => game.addOneThing()} type="button">
            Make a thing!
          </button>
          <Profile />
        </div>
      )}
    </Subscribe>
  );
}
