'use client'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const countStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: 'white',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    margin: '5px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    transition: 'background-color 0.3s',
  };

  const decrementStyle = {
    ...buttonStyle,
    backgroundColor: '#e63946', // Red for decrement
  };

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
