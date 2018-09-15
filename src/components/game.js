import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import GameState from "../state/game";
import Clicker from "./clicker";

export default function Game() {
  return (
    <Subscribe to={[GameState]}>
      {game => (
        <div>
          <h1>You have {game.state.things} things!</h1>
          <Clicker time={1000} name="Hello" buy={() => game.buyOneThing()} />
          <Clicker time={500} name="lol" />
          <Profile />
        </div>
      )}
    </Subscribe>
  );
}
