'use client';

import { useState } from 'react';
import { fetchUsersData } from '../Api-Data/externalCalls';

const RetryFetch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false); 

  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    setShowError(false);

    const { users, hasError } = await fetchUsersData();

    if (hasError) {
      setError('Failed to fetch users');
      setUsers(null);
    } else {
      setUsers(users);
      setError(null);
    }

    setLoading(false);
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
