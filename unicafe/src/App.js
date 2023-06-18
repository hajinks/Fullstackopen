import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import History from "./components/History";
import Statistics from "./components/Statistics";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  // Don't actually need good/bad/neutral vars as we can deduce from history
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [selected, setSelected] = useState(0); // idx for anecdote array
  const [nextAnecdote, setNextAnecdote] = useState("get anecdote");
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Handle buttons for good/bad/neutral feedback
  const handleClick = (score) => () => {
    let incr;
    let val;
    console.log(score);
    switch (score) {
      case "G":
        incr = setGood;
        val = good;
        break;
      case "B":
        incr = setBad;
        val = bad;
        break;
      default:
        incr = setNeutral;
        val = neutral;
    }
    incr(val + 1); // converts to e.g. setGood(good + 1)
    setAllClicks([...allClicks, score]);
  };

  // Check if started displaying anecdotes
  function startedAnecdotes() {
    return nextAnecdote === "next anecdote";
  }

  function getAnecdote() {
    // First change the button to say "next anecdote"
    console.log("started?", startedAnecdotes());
    if (!startedAnecdotes()) {
      setNextAnecdote("next anecdote");
    }
    // Select a random index
    const max = anecdotes.length;
    const next = Math.floor(Math.random() * max);
    console.log("next", next, anecdotes[next]);
    setSelected(next);
  }

  // Voting button
  function Vote({ active, change, idx, text }) {
    if (!active) return;
    return <Button handleClick={submitVote(change, idx)} text={text} />;
  }

  // Vote for anecdote, +1 or -1
  const submitVote = (change, idx) => () => {
    console.log("change", change);
    let newVotes = [...votes];
    newVotes[idx] = newVotes[idx] + change;
    setVotes(newVotes);
  };

  // DOM for displayed anecdote
  function CurrentAnecdote() {
    if (startedAnecdotes()) {
      return <p>{anecdotes[selected]}</p>;
    }
  }

  // Display score for current anecdote
  function CurrentScore() {
    if (startedAnecdotes()) {
      return <p>votes: {votes[selected]}</p>;
    }
  }

  console.log(selected, nextAnecdote);

  return (
    <div className="grid-root">
      <h1>Provide your feedback:</h1>
      <div className="grid-buttons">
        <Button handleClick={handleClick("G")} text="good" />
        <Button handleClick={handleClick("N")} text="neutral" />
        <Button handleClick={handleClick("B")} text="bad" />
      </div>
      <div>
        <History allClicks={allClicks} />
      </div>
      <div>
        <Statistics
          history={allClicks}
          good={good}
          bad={bad}
          neutral={neutral}
        />
      </div>
      <br />
      <CurrentAnecdote />
      <CurrentScore />
      <div className="grid-buttons">
        <Vote
          active={nextAnecdote === "next anecdote"}
          change={1}
          idx={selected}
          text="♥"
        />
        <Button handleClick={getAnecdote} text={nextAnecdote} />
        <Vote
          active={nextAnecdote === "next anecdote"}
          change={-1}
          idx={selected}
          text="🤬"
        />
      </div>
    </div>
  );
}

export default App;
