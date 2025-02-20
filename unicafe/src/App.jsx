import "./App.css";
import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({
  good,
  bad,
  neutral,
  allFeedBackCount,
  average,
  postivePercentage,
}) => {
  if (allFeedBackCount !== 0) {
    return (
      <>
        <h1>Statistics</h1>

        <table>
          <tbody>
            <tr>
              <th>Statistic</th>
              <th>Value</th>
            </tr>

            <StatisticsLine text={"Good"} value={good}></StatisticsLine>
            <StatisticsLine text={"Neutral"} value={neutral}></StatisticsLine>
            <StatisticsLine text={"Bad"} value={bad}></StatisticsLine>
            <StatisticsLine
              text={"All"}
              value={allFeedBackCount}
            ></StatisticsLine>
            <StatisticsLine text={"Average"} value={average}></StatisticsLine>
            <StatisticsLine
              text={"Positive(%)"}
              value={postivePercentage}
            ></StatisticsLine>
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedBackCount = good + bad + neutral;
  const average = allFeedBackCount !== 0 ? (good - bad) / allFeedBackCount : 0;
  const postivePercentage =
    allFeedBackCount !== 0 ? (good * 100) / allFeedBackCount : 0;

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>

      <div className="feedback-buttons">
        <Button text={"Good"} onClick={incrementGood}></Button>
        <Button text={"Neutral"} onClick={incrementNeutral}></Button>
        <Button text={"Bad"} onClick={incrementBad}></Button>
      </div>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedBackCount={allFeedBackCount}
        average={average}
        postivePercentage={postivePercentage}
      ></Statistics>
    </div>
  );
};

export default App;
