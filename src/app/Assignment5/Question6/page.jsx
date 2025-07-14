import { fetchUsersData } from '../Api-Data/externalCalls'; 
import RetryFetch from './Q6'; 

const UsersPage= async()=> {
  const { users, hasError , errorMessage } = await fetchUsersData();

  if (hasError) {
    return (
      <div>
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
export default UsersPage;