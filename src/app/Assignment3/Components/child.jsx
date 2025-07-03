'use client';
import { useContext } from 'react';
import { AuthContext } from './authContext';
import { ThemeContext } from './themeContext';

export default function ChildComponent() {
  const { isLoggedIn, login, username } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  

  return (
    <div style={{backgroundColor: theme === "light" ? "#f9f9f9" : "#333",}}>
      <h2>{isLoggedIn ? `Welcome, ${username}!` : "Please log in."}</h2>

      {!isLoggedIn && (
        <button onClick={login} style={{ margin: "10px" }}>
          Login
        </button>
      )}

      <button onClick={toggleTheme}>
        Toggle Theme 
      </button>
    </div>
  );
}
