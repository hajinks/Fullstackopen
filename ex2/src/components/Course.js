const Course = ({ courses }) => {
  return (
    <div className="main">
      {courses.map(({ name, id, parts }) => {
        const totalExercises = parts.reduce(
          (acc, cur) => acc + cur.exercises,
          0
        );
        return (
          <Part
            key={id}
            parts={parts}
            name={name}
            totalExercises={totalExercises}
          />
        );
      })}
    </div>
  );
};

const Part = ({ parts, id, name, totalExercises }) => {
  return (
    <div className="part">
      <h1>{name}</h1>
      <ul>
        {parts.map(({ name, exercises, id }) => {
          // Don't need to iterate again with reduce if we add here
          //totalExercises += exercises;
          return (
            <li key={id}>
              {name} ({exercises} exercises)
            </li>
          );
        })}
      </ul>
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

export default Course;
