'use client'
import {containerStyle,countStyle,buttonStyle,decrementStyle} from "./Q4.css"
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h1 style={countStyle}>Counter: {count}</h1>
      <div>
        <button
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={decrementStyle}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
