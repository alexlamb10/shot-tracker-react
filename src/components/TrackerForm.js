import React from "react";
import "./ShotTracker.css";

function TrackerForm() {
  return (
    <div className="form-div">
      <form className="each-form">
        <input type="number" min={0} />
        <input type="number" min={0} />
        <p>Total:</p>
        <input type="number" min={0} />
        <input type="number" min={0} />
        <p>Total:</p>
        <input type="number" min={0} />
        <input type="number" min={0} />
        <p>Total:</p>
        <input type="number" min={0} />
        <input type="number" min={0} />
        <p>Total:</p>
        <input type="checkbox" />
        <p>Final Score:</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TrackerForm;
