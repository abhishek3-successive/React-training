'use client'
import { useState } from "react";
import Weather from "../components/Q3";

export default function App() {
  const [selectedCity, setSelectedCity] = useState('Delhi');

  const cityData = {
    Delhi: 30,
    Mumbai: 22,
    Shimla: 6,
    Bengaluru: 18,
  };

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const appStyle = {
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  };

  const selectStyle = {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Weather App</h1>

      <select value={selectedCity} onChange={handleChange} style={selectStyle}>
        {Object.keys(cityData).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <Weather temperature={cityData[selectedCity]} />
    </div>
  );
}
