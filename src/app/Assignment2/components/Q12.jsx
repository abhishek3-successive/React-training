// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.
"use client"

import React, {useReducer} from "react"

const votingReducer = (state , action)=>{
    switch (action.type) {
    case 'Vote_BJP':
      return { ...state , BJP : state.BJP + 1 };
    case 'Vote_Congress':
      return { ...state , Congress : state.Congress + 1 };
    default:
      return state;
  }
}

export default function VoteCounter() {
  // useReducer takes the reducer function and initial state
  const [state, dispatch] = useReducer(votingReducer, {BJP : 0, Congress : 0});


  return (
    <div>
      <h1>BJP : {state.BJP}</h1>
      <button onClick={() => dispatch({ type: 'Vote_BJP' })}>+1</button>

      <h1>Congress : {state.Congress}</h1>
      <button onClick={() => dispatch({ type: 'Vote_Congress' })}>+1</button>
     </div>
  );
}