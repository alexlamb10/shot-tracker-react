import React from "react";
import "./ShotTracker.css";

function ShowScore({ overallTotal, finished }) {
  return <div className={!finished ? "complete" : "shows-finished"}>works</div>;
}

export default ShowScore;
