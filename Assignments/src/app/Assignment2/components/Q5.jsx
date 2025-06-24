'use client'
// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import { useState } from "react"
export default function CounterWithStep(){
const [count , setcount ] = useState(0);
const [step , setstep] = useState('');

const handleStep = (e) => {
    const val = e.target.value;
   if(!isNaN(val)){
    setstep(parseInt(val,10))
   }
  };

return(
    <>
    <p> Count : {count}</p>
    <input type="text" value={step} onChange={handleStep}></input>
    <button onClick={()=> setcount(count+step)}> Increment</button>
    <button onClick={()=> setcount(count-step)}>Decrement</button>
    </>
);
}
