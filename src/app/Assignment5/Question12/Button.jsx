// Button.jsx
import React from 'react';

const styles = {
  base: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    color: '#fff',
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  disabled: {
    backgroundColor: '#ccc',
    color: '#666',
    cursor: 'not-allowed',
  },
};

const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
  const combinedStyle = {
    ...styles.base,
    ...(styles[variant] || styles.primary),
    ...(disabled ? styles.disabled : {}),
  };

  return (
    <button onClick={onClick} style={combinedStyle} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
