import React from "react";
import "./ShotTracker.css";

function TrackerForm() {
  return (
    <div className="form-div">
      <form className="each-form">
        Free Throws:
        <div className="drill-inputs">
          <input type="number" min={0} />
          <input type="number" min={0} />
          <p>Total:</p>
        </div>
        Spot-up:
        <div className="drill-inputs">
          <input type="number" min={0} />
          <input type="number" min={0} />
          <p>Total:</p>
        </div>
        Mid-range:
        <div className="drill-inputs">
          <input type="number" min={0} />
          <input type="number" min={0} />
          <p>Total:</p>
        </div>
        Threes:
        <div className="drill-inputs">
          <input type="number" min={0} />
          <input type="number" min={0} />
          <p>Total:</p>
        </div>
        <p>Final Score:</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TrackerForm;
