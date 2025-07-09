// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. 
// Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.
'use client';
import { useState } from 'react';
import styles from './Q2.css';

export default function ControlledForm() {
    const [input, setInput] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [radio, setRadio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            input,
            checkbox,
            radio,
        });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
                Text:
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={styles.input}
                />
            </label>

            <label style={styles.label}>
                Agree:
                <input
                    type="checkbox"
                    checked={checkbox}
                    onChange={(e) => setCheckbox(e.target.checked)}
                    style={styles.checkbox}
                />
            </label>

            <div style={styles.radioGroup}>
                <p style={styles.radioLabel}>Choose one:</p>
                <label>
                    <input
                        type="radio"
                        value="option1"
                        checked={radio === 'option1'}
                        onChange={(e) => setRadio(e.target.value)}
                    />
                    Option 1
                </label>
                <label>
                    <input
                        type="radio"
                        value="option2"
                        checked={radio === 'option2'}
                        onChange={(e) => setRadio(e.target.value)}
                    />
                    Option 2
                </label>
            </div>

            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}
