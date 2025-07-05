// app/page.jsx (or any Next.js page)
'use client';

import { useState } from 'react';
import Modal from './model';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [contentType, setContentType] = useState('text');

  const openModalWithContent = (type) => {
    setContentType(type);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Reusable Modal Demo</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => openModalWithContent('text')}>Show Text</button>
        <button onClick={() => openModalWithContent('image')}>Show Image</button>
        <button onClick={() => openModalWithContent('form')}>Show Form</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {contentType === 'text' && <p>This is some simple text content inside the modal.</p>}

        {contentType === 'image' && (
          <img
            src="@publlic/Images/image.png"
            alt="Goku"
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        )}

        {contentType === 'form' && (
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); closeModal(); }}>
            <label>
              Name: <input type="text" required style={{ marginLeft: '0.5rem' }} />
            </label>
            <br /><br />
            <button type="submit">Submit</button>
          </form>
        )}
      </Modal>
    </main>
  );
}
