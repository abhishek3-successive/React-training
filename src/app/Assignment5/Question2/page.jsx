'use client'
import { useEffect, useState } from 'react';
import { fetchUsers } from '../Api-Data/externalCalls';
import UsersList from './Q2client';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const { users, hasError } = await fetchUsers();
      setUsers(users);
      setHasError(hasError);
    };

    getUsers();
  }, []);

  const handleShowError = () => {
    setHasError(true);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Users
      </h1>

      <button
        onClick={handleShowError}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Show Error
      </button>

      <UsersList users={users} hasError={hasError} />
    </main>
  );
}
