const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p>Press a button</p>;
  } else {
    return (
      <div>
        <h2>History</h2>
        <p>{allClicks}</p>
      </div>
    );
  }
};

export default History;
