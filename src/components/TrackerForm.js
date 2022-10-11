import React, { useState } from "react";
import "./ShotTracker.css";

function TrackerForm() {
  const [currentPlayer, setCurrentPlayer] = useState("");
  let names = [
    { playerId: 1, player: "Alex" },
    { playerId: 2, player: "Jaren" },
    { playerId: 3, player: "Blake" },
    { playerId: 4, player: "Preston" },
    { playerId: 5, player: "Zack" },
  ];

  let nameList = names.map((name) => (
    <option value={name.player}>{name.player}</option>
  ));

  return (
    <div className="form-div">
      <h1>{currentPlayer ? `${currentPlayer}'s Score` : "Select a Player"}</h1>
      <select onChange={(e) => setCurrentPlayer(e.target.value)}>
        <option value="">Select Player</option>
        {names.map((name) => (
          <div>{name.player}</div>
        ))}
        {nameList}
      </select>
      <form className="each-form">
        Free Throws:
        <div className="drill-inputs">
          <input required type="number" min={0} />
          <input required type="number" min={0} />
          <p>Total:</p>
        </div>
        Spot-up:
        <div className="drill-inputs">
          <input required type="number" min={0} />
          <input required type="number" min={0} />
          <p>Total:</p>
        </div>
        Mid-range:
        <div className="drill-inputs">
          <input required type="number" min={0} />
          <input required type="number" min={0} />
          <p>Total:</p>
        </div>
        Threes:
        <div className="drill-inputs">
          <input required type="number" min={0} />
          <input required type="number" min={0} />
          <p>Total:</p>
        </div>
        <p>Final Score:</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TrackerForm;
