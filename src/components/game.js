import React from "react";
import { Subscribe } from "unstated";
import Profile from "./profile";
import GameState from "../state/game";
import Clicker from "./clicker";
import Box from "./box";
import Calendar from "./calendar";

export default function Game() {
  return (
    <div>
      <Subscribe to={[GameState]}>
        {game => (
          <div>
            <Box>
              <h1>You have {game.state.credits} credits!</h1>
            </Box>
            <Clicker
              time={0}
              name="ello"
              increment={1}
              addCredits={game.addCredits}
            />
            <Clicker
              time={1000}
              name="lol"
              increment={10}
              addCredits={game.addCredits}
            />
          </div>
        )}
      </Subscribe>
      <Profile />
      <Calendar />
    </div>
  );
}
