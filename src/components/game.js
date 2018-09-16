import React from "react";
import { Subscribe } from "unstated";
import pretty from "../utils/pretty";
import GameState from "../state/game";
import Profile from "./profile";
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
              <h1>You have {pretty(game.state.credits)} credits!</h1>
            </Box>
            <div style={{ maxWidth: "70%" }}>
              {game.state.clickers.map(clicker => {
                if (game.state.maxCredits < clicker.unlockedAt) {
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
              <Clicker
                auto
                time={5000}
                name="Auto click"
                value={1}
                credits={game.state.credits}
                getUpgradeCost={(value, count) => value * 2 ** count}
                addCredits={game.addCredits}
                removeCredits={game.removeCredits}
              />
            </div>
          </div>
        )}
      </Subscribe>
      <Profile />
      <Calendar />
    </div>
  );
}
