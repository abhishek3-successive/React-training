import UsersList from './Q3client';
import { fetchUsers } from '../Api-Data/externalCalls';  

const  UsersPage= async()=> {
  const { users, hasError } = await fetchUsers();

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
