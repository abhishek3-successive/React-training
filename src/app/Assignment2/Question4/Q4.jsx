'use client'
// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.
import React, { useState } from "react";

function RandomNumberGenerator() {
  
  const [randomNumber, setRandomNumber] = useState(null);

 
  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
  };

  return (
    <div>
      <h2>Random Number: {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate New Number</button>
    </div>
  );
}

export default RandomNumberGenerator;
