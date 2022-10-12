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
  const [didHustle, setDidHustle] = useState("No");
  const [hustle, setHustle] = useState(0);
  const [finisher, setFinisher] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPercent, setTotalPercent] = useState(0);
  const [overallTotal, setOverallTotal] = useState(0);

  useEffect(() => {
    if (didHustle === "Yes") {
      setHustle(3);
    } else if (didHustle === "No") {
      setHustle(0);
    }
    let ftDivisor = 0;
    let spotDivisor = 0;
    let midDivisor = 0;
    let threeDivisor = 0;

    if (!(ftMisses > 0) && !(ftMakes > 0)) {
      ftDivisor = 1;
    } else {
      ftDivisor = +ftMisses + +ftMakes;
    }
    if (!(spotMisses > 0) && !(spotMakes > 0)) {
      spotDivisor = 1;
    } else {
      spotDivisor = +spotMisses + +spotMakes;
    }
    if (!(midMisses > 0) && !(midMakes > 0)) {
      midDivisor = 1;
    } else {
      midDivisor = +midMisses + +midMakes;
    }
    if (!(threeMisses > 0) && !(threeMakes > 0)) {
      threeDivisor = 1;
    } else {
      threeDivisor = +threeMisses + +threeMakes;
    }

    setTotalPercent((+ftTotal + +spotTotal + +midTotal + +threeTotal) / 4);

    setOverallTotal(totalPercent + +finisher + +hustle);

    // @ts-ignore
    setTotal((Math.ceil(totalPercent * 4) / 4).toFixed(2));

    setFtTotal((+ftMakes / +ftDivisor) * 100);
    setSpotTotal((+spotMakes / +spotDivisor) * 100);
    setMidTotal((+midMakes / +midDivisor) * 100);
    setThreeTotal((+threeMakes / +threeDivisor) * 100);
  }, [
    didHustle,
    finisher,
    ftMakes,
    ftMisses,
    ftTotal,
    hustle,
    midMakes,
    midMisses,
    midTotal,
    spotMakes,
    spotMisses,
    spotTotal,
    threeMakes,
    threeMisses,
    threeTotal,
    totalPercent,
  ]);

  function checkboxChanged(e) {
    if (e.target.checked) {
      setDidHustle("Yes");
    } else if (!e.target.checked) {
      setDidHustle("No");
    }
  }

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
        <h3>Free Throws:</h3>
        <div className="drill-inputs">
          <div>
            <p className="titles">Makes: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setFtMakes(e.target.value)}
            />
          </div>
          <div>
            <p className="titles">Misses: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setFtMisses(e.target.value)}
            />
          </div>
          <p>{isNaN(ftTotal) ? "%0.0" : "%" + ftTotal.toFixed(2)}</p>
        </div>
        <h3>Spot-up:</h3>
        <div className="drill-inputs">
          <div>
            <p className="titles">Makes: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setSpotMakes(e.target.value)}
            />
          </div>
          <div>
            <p className="titles">Misses: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setSpotMisses(e.target.value)}
            />
          </div>
          <p>{isNaN(spotTotal) ? "%0.0" : "%" + spotTotal.toFixed(2)}</p>
        </div>
        <h3>Mid-range:</h3>
        <div className="drill-inputs">
          <div>
            <p className="titles">Makes: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setMidMakes(e.target.value)}
            />
          </div>
          <div>
            <p className="titles">Misses: </p>
            <input
              required
              type="number"
              min={0}
              onChange={(e) => setMidMisses(e.target.value)}
            />
          </div>
          <p>{isNaN(midTotal) ? "%0.0" : "%" + midTotal.toFixed(2)}</p>
        </div>
        <h3>Threes:</h3>
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
              onChange={(e) => setFinisher(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="hustlePts">Hustle Points</label>
            <input
              type="checkbox"
              name="hustlePts"
              id="hustlePts"
              onChange={(e) => checkboxChanged(e)}
            />
          </div>
        </div>
        <p>Running Total:</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TrackerForm;
