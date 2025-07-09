import { fetchUsers } from '../Api-Data/axios/user'; 
import RetryFetch from './Q6'; 

export default async function UsersPage() {
  const { users, hasError, errorMessage } = await fetchUsers();

  if (hasError) {
    return (
      <div>
        <h1>Failed to load users 😢</h1>
        <p>{errorMessage}</p>
        <RetryFetch />
      </div>
    );
  }

  return (
    <div>
      <h1>Users List</h1>
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
}
