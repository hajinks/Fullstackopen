import StatLine from "./StatLine";

const Statistics = ({ history, good, bad, neutral }) => {
  console.log(history);
  if (history.length === 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <p>Awaiting feedback</p>
      </div>
    );
  } else {
    // Calculate mean score
    let score = 0;
    for (const e of history) {
      if (e === "G") {
        score++;
      } else if (e === "B") {
        score--;
      }
    }
    const avg = score / history.length; // mean
    const pos =
      (history.filter((x) => x === "G").length / history.length) * 100;

    return (
      <div className="grid-container">
        <table>
          <caption>Scores</caption>
          <tbody style={{ textAlign: "left" }}>
            <StatLine title="good" stat={good} />
            <StatLine title="neutral" stat={bad} />
            <StatLine title="bad" stat={neutral} />
            <StatLine title="total" stat={history.length} />
          </tbody>
        </table>
        {/* <h1>Scores</h1> */}
        <p></p>
        <table>
          <caption>Statistics</caption>
          <tbody style={{ textAlign: "left" }}>
            <StatLine title="Avg score" stat={avg} />
            <StatLine title="Positive" stat={pos} format="%" />
          </tbody>
        </table>
      </div>
    );
  }
};

export default Statistics;
