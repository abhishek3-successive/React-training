// 3.Create a component with controlled input field and a button. 
// When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. 
// Otherwise, nothing should be displayed.
'use client';
import { useState } from "react";
import styles from "./Q3.css";

export default function ControlledRender() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type 'show'"
        style={styles.input}
      />
      {input === "show" && <div style={styles.message}>Message Displayed</div>}
    </div>
  );
}
