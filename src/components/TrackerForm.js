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
  const [hustle, setHustle] = useState("No");

  useEffect(() => {
    setFtTotal((+ftMakes / (+ftMakes + +ftMisses)) * 100);
    setSpotTotal((+spotMakes / (+spotMakes + +spotMisses)) * 100);
    setMidTotal((+midMakes / (+midMakes + +midMisses)) * 100);
    setThreeTotal((+threeMakes / (+threeMakes + +threeMisses)) * 100);
  }, [
    ftMakes,
    ftMisses,
    midMakes,
    midMisses,
    spotMakes,
    spotMisses,
    threeMakes,
    threeMisses,
  ]);

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
        <div className="drill-inputs drills3">
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
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setSpotMakes(e.target.value)}
          />
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setSpotMisses(e.target.value)}
          />
          <p>{isNaN(spotTotal) ? "%0.0" : "%" + spotTotal.toFixed(2)}</p>
        </div>
        Mid-range:
        <div className="drill-inputs">
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setMidMakes(e.target.value)}
          />
          <input
            required
            type="number"
            min={0}
            onChange={(e) => setMidMisses(e.target.value)}
          />
          <p>{isNaN(midTotal) ? "%0.0" : "%" + midTotal.toFixed(2)}</p>
        </div>
        Threes:
        <div className="drill-inputs">
          <div>
            <p className="titles">Makes: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setThreeMakes(e.target.value)}
            />
          </div>
          <div>
            <p className="titles">Misses: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setThreeMisses(e.target.value)}
            />
          </div>
          <p>{isNaN(threeTotal) ? "%0.0" : "%" + threeTotal.toFixed(2)}</p>
        </div>
        <div className="drill-inputs drill-inputs2">
          <div>
            <p className="titles">Finisher: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setThreeMakes(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="practice">Did Practice?</label>
            <input type="checkbox" name="practice" id="practice" />
          </div>
        </div>
        <p>Final Score:</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TrackerForm;
