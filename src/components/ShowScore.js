import React, { useEffect, useState } from "react";
import "./ShotTracker.css";

function ShowScore({ overallTotal, finished, currentPlayer }) {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    if (overallTotal <= 70) {
      setPicture("Could use work");
    } else if (overallTotal < 70 && overallTotal <= 85) {
      setPicture("That's better");
    } else if (overallTotal > 85 && overallTotal <= 100) {
      setPicture("Solid");
    } else if (overallTotal > 100 && overallTotal <= 110) {
      setPicture("Great");
    } else if (overallTotal > 110) {
      setPicture("Excellent");
    }
  }, [overallTotal]);

  return (
    <div className={!finished ? "complete" : "shows-finished"}>
      Total Score: {overallTotal} for {currentPlayer}
      <p>Picture: {picture}</p>
    </div>
  );
}

export default ShowScore;
