import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import Button from "./button";
import GameState from "../state/game";

export default function Game() {
  return (
    <Subscribe to={[GameState]}>
      {game => (
        <div>
          <h1>You have {game.state.things} things!</h1>
          <Button onClick={() => game.addOneThing()} type="button">
            Make a thing!
          </Button>
          <Profile />
        </div>
      )}
    </Subscribe>
  );
}
