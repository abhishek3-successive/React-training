// components/Modal.jsx
import React from 'react';

const Modal=({ isOpen, onClose, children })=> {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>×</button>
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    minWidth: '300px',
    maxWidth: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.75rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  content: {
    marginTop: '1rem',
  },
};

export default Modal;