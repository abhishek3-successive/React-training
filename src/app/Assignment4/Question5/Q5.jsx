// 5.Construct a select dropdown menu with multiple options. 
// Control the selected option using state. When an option is selected, display a message showing the selected value.
'use client';
import { useState } from "react";
import styles from "./Q5.css";

export default function Dropdown() {
  const [select, setSelect] = useState('');

  const handleSelect = (e) => setSelect(e.target.value);

  const selectData = ['option1', 'option2', 'option3'];


  return (
    <div style={styles.container}>
      <select value={select} onChange={handleSelect} style={styles.select}>
        <option value="" disabled>Select an option</option>
        {selectData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <h1 style={styles.heading}>
        {select ? `Your selected option is: ${select}` : 'No option selected'}
      </h1>
    </div>
  );
}
