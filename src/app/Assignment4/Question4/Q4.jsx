'use client';
import { useState } from "react";
import styles from "./Q4.css";

export default function ControlledRegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      alert(`Hello ${username}, registration successful!`);
    }
  };

 

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Verify your password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        style={styles.input}
      />
      {error && <div style={styles.error}>{error}</div>}
      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
}
