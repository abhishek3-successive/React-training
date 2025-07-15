import React from 'react';
import { fetchUsersData } from '../Api-Data/externalCalls';

const UsersPage = async () => {
  const { users, hasError } = await fetchUsersData();

  if (hasError) {
    return <div>Failed to load users.</div>;
  }

  return (
    <div>
      <h1>List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}
          >
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
