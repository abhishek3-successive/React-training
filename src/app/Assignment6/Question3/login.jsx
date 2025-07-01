import React, { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
