'use client';

import { useState } from 'react';
import axios from 'axios';

const RetryFetch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false); 

  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    setShowError(false); 

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Retrying...</p>;

  if (users) {
    return (
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}
            >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <>
          {!showError ? (
            <button onClick={() => setShowError(true)} style={{ marginBottom: '1rem' }}>
              Show Error Message
            </button>
          ) : (
            <p style={{ color: 'red' }}>Retry failed: {error}</p>
          )}
        </>
      )}

      <button onClick={handleRetry} style={{ padding: '0.5rem 1rem' }}>
        Retry
      </button>
    </div>
  );
};

export default RetryFetch;
