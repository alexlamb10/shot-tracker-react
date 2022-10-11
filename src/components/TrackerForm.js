import React, { useEffect, useState } from "react";
import "./ShotTracker.css";

function TrackerForm() {
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [ftMakes, setFtMakes] = useState(0);
  const [ftMisses, setFtMisses] = useState(0);
  const [ftTotal, setFtTotal] = useState(0);
  const [midMakes, setMidMakes] = useState(0);
  const [midMisses, setMidMisses] = useState(0);
  const [midTotal, setMidTotal] = useState(0);
  const [spotMakes, setSpotMakes] = useState(0);
  const [spotMisses, setSpotMisses] = useState(0);
  const [spotTotal, setSpotTotal] = useState(0);
  const [threeMakes, setThreeMakes] = useState(0);
  const [threeMisses, setThreeMisses] = useState(0);
  const [threeTotal, setThreeTotal] = useState(0);
  const [hustle, setHustle] = useState("");

  useEffect(() => {
    setFtTotal((+ftMakes / (+ftMakes + +ftMisses)) * 100);
  }, [ftMakes, ftMisses]);

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
      <h1 className="center">
        {currentPlayer ? `${currentPlayer}'s Score` : "Select a Player"}
      </h1>
      <form className="each-form">
        <div className="drill-inputs">
          <select onChange={(e) => setCurrentPlayer(e.target.value)}>
            <option value="">Select Player</option>
            {names.map((name) => (
              <div>{name.player}</div>
            ))}
            {nameList}
          </select>
          <div>
            <label htmlFor="practice">Did Practice?</label>
            <input type="checkbox" name="practice" id="practice" />
          </div>
        </div>
        Free Throws:
        <div className="drill-inputs">
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setFtMakes(e.target.value)}
          />
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setFtMisses(e.target.value)}
          />
          <p>{isNaN(ftTotal) ? "%0.0" : "%" + ftTotal.toFixed(2)}</p>
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
