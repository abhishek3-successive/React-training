// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
// Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.
'use client'
import { useState } from 'react';
import styles from './Q8.css';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (value === '' || isNaN(value)) {
            setFahrenheit('');
            return;
        }
        const f = (parseFloat(value) * 9) / 5 + 32;
        setFahrenheit(f.toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value === '' || isNaN(value)) {
            setCelsius('');
            return;
        }
        const c = ((parseFloat(value) - 32) * 5) / 9;
        setCelsius(c.toFixed(2));
    };

    

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Temperature Converter</h2>

            <div style={styles.inputGroup}>
                <label htmlFor="celsius" style={styles.label}>Celsius:</label>
                <input
                    id="celsius"
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    placeholder="Enter °C"
                    style={styles.input}
                />
            </div>

            <div style={styles.inputGroup}>
                <label htmlFor="fahrenheit" style={styles.label}>Fahrenheit:</label>
                <input
                    id="fahrenheit"
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    placeholder="Enter °F"
                    style={styles.input}
                />
            </div>
        </div>
    );
}
