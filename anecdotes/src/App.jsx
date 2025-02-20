import "./App.css";

import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState([]);
  const [selected, setSelected] = useState(0);
  const currentAnecdoteVotes = votes.find((item) => item.index === selected);
  const anecdoteMostVote = getAnecdotesWithMostVotes(); 
  
  function getAnecdotesWithMostVotes() {
    if(votes.length === 0)
      return {anecdote: anecdotes[0], count: 0}
    else {
      const voteObject = [...votes].sort((a,b) => b.count - a.count)[0];
      return {anecdote: anecdotes[voteObject.index], count : voteObject.count}
    }
  }

  function addVote() {
    if (currentAnecdoteVotes) {
      const newVotes = votes.filter(
        (item) => item.index !== currentAnecdoteVotes.index
      );
      setVotes([
        ...newVotes,
        {
          index: currentAnecdoteVotes.index,
          count: currentAnecdoteVotes.count + 1,
        },
      ]);
    } else {
      setVotes([...votes, { index: selected, count: 1 }]);
    }
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {currentAnecdoteVotes ? currentAnecdoteVotes.count : 0} votes</p>
      <button onClick={addVote}>Vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        Next Anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdoteMostVote.anecdote}</p>
      <p>has {anecdoteMostVote.count} votes</p>
    </div>
  );
};

export default App;
