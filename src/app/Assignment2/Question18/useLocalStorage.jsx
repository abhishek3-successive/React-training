'use client'
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store the value
  const [value, setValue] = useState(initialValue);

  // Get value from localStorage when component mounts
  useEffect(() => {
    // Check if we're in the browser (not during server-side rendering)
      try {
        const savedValue = localStorage.getItem(key);
        if (savedValue) {
          setValue(JSON.parse(savedValue));
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    }
, [key]);

  // Function to set value in both state and localStorage
  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  // Function to remove value from localStorage
  const removeValue = () => {
    try {
      setValue(initialValue);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  return [value, setStoredValue, removeValue];
}

export default useLocalStorage;
