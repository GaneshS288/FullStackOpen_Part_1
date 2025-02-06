const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, excercisesCount }) => {
  return (
    <p>
      {part} {excercisesCount}
    </p>
  );
};
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <>
      <Part part={part1} excercisesCount={exercises1}></Part>
      <Part part={part2} excercisesCount={exercises2}></Part>
      <Part part={part3} excercisesCount={exercises3}></Part>
    </>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course}></Header>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      ></Content>
      <Total total={total}></Total>
    </div>
  );
};

export default App;
