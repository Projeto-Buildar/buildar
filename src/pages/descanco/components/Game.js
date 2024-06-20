import React, { useEffect, useRef, useState } from "react";
import Dino, { updateDino, set } from "./Dino";
import Ground, { updateGround } from "./Ground";
import Cactus, { updateCacti } from "./Cactus";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const Game = () => {
  const worldRef = useRef(null);
  const [speedScale, setSpeedScale] = useState(1);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      setIsRunning(true);
      setShowStartScreen(false);
    };

    document.addEventListener("keydown", handleStart, { once: true });
    return () => document.removeEventListener("keydown", handleStart);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    let lastTime;
    const update = (time) => {
      if (lastTime != null) {
        const delta = time - lastTime;
        updateGround(delta, speedScale);
        updateDino(delta, speedScale);
        updateCacti(delta, speedScale);
      }
      lastTime = time;
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => setIsRunning(false);
  }, [isRunning, speedScale]);

  return (
    <div ref={worldRef} className="world" data-world>
      <div className="score" data-score>{score}</div>
      {showStartScreen && (
        <div className="start-screen" data-start-screen>
          PRESS ANY BUTTON TO START
        </div>
      )}
      <Ground />
      <Dino />
      <Cactus />
    </div>
  );
}

export default Game;
