import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (score) => () => {
    let incr;
    let val;
    switch (score) {
      case "G":
        console.log("G");
        incr = setGood;
        val = good;
        break;
      case "B":
        console.log("B");
        incr = setBad;
        val = bad;
        break;
      default:
        console.log("N");
        incr = setNeutral;
        val = neutral;
    }
    incr(val + 1);
  };

  return (
    <div>
      <h1>Provide your feedback:</h1>
      <div>
        <Button handleClick={handleClick("G")} text="good" />
        {good}
      </div>
      <div>
        <Button handleClick={handleClick("N")} text="neutral" />
        {neutral}
      </div>
      <div>
        <Button handleClick={handleClick("B")} text="bad" />
        {bad}
      </div>
    </div>
  );
}

export default App;
