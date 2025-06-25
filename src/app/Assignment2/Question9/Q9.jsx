// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.
// Q9.jsx
'use client'
import React, { useContext } from 'react';
import ThemeContext from '../context/theme';
export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);  // This should not throw an error if context is provided

  function handleTheme() {
    if (theme === "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
  }

  return (
    <div style={{backgroundColor : theme}}>
      <p>The current theme is {theme}</p>
      <button onClick={handleTheme}>Toggle Theme</button>
    </div>
  );
}

