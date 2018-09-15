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
            <Box style={{ maxWidth: "70%" }}>
              <h1>You have {game.state.credits} credits!</h1>
            </Box>
            {game.state.clickers.map(clicker => {
              if (game.state.credits < clicker.unlockedAt) {
                return null;
              }
              return (
                <Clicker
                  key={clicker.name}
                  time={clicker.time}
                  name={clicker.name}
                  value={clicker.value}
                  credits={game.state.credits}
                  getUpgradeCost={clicker.upgradeCost}
                  addCredits={game.addCredits}
                  removeCredits={game.removeCredits}
                />
              );
            })}
          </div>
        )}
      </Subscribe>
      <Profile />
      <Calendar />
    </div>
  );
}
