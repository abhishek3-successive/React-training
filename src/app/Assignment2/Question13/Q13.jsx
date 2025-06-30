// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.
'use client'
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick, resetCount, count }) => {
  console.log("Child rendered");
  return (
    <>
      <h2>Child Count: {count}</h2>
      <button onClick={onClick}>Increment Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // Increment the count
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Child button clicked!");
  }, [count]);

  // Reset the count
  const resetCount = () => {
    setCount(0);
    console.log("Count reset!");
  };

  return (
    <>
     
      <Child onClick={handleClick} resetCount={resetCount}  count = {count} />
    </>
  );
}
