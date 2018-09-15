import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import GameState from "../state/game";
import Clicker from "./clicker";
import Box from "./box";

export default function Game() {
  return (
    <Subscribe to={[GameState]}>
      {game => (
        <div>
          <Box>
            <h1>You have {game.state.things} things!</h1>
          </Box>
          <Clicker
            time={0}
            name="ello"
            increment={1}
            addThings={game.addThings}
          />
          <Clicker
            time={1000}
            name="lol"
            increment={10}
            addThings={game.addThings}
          />
          <Profile />
        </div>
      )}
    </Subscribe>
  );
}
