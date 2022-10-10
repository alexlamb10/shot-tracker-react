import React from "react";

function TrackerForm() {
  return (
    <div>
      <form>
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
