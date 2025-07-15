'use client'
import { useEffect, useState } from 'react';
import { fetchUsers } from '../Api-Data/externalCalls';
import UsersList from './Q2client';

const UsersPage=()=> {
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(true);

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

      <UsersList users={users} hasError={hasError} />
    </main>
  );
}

export default UsersPage;