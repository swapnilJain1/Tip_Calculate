import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(18);
  const [people, setPeople] = useState(1);
  const totalTip = (bill * (tip / 100)).toFixed(2);

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        value={bill}
        min="0"
        onChange={(e) => setBill(parseInt(e.target.value))}
      />
      <label htmlFor="tip">Tip Percentage</label>
      <input
        type="number"
        id="tip"
        min="0"
        value={tip}
        onChange={(e) => setTip(parseInt(e.target.value))}
      />
      <label htmlFor="people">Number of people</label>
      <input
        type="number"
        value={people}
        min="1"
        id="people"
        onChange={(e) => setPeople(parseInt(e.target.value))}
      />
      {tip ? <p>Total tip : ${totalTip}</p> : "-"}
      {tip ? <p>Tip per person : ${(totalTip / people).toFixed(2)}</p> : "-"}
    </>
  );
}
