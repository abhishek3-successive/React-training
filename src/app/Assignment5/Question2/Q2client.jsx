const  UsersList=({ users, hasError })=> {
  if (hasError) return <p style={{ color: 'red' }}>❌ An error occurred while fetching users.</p>;
  if (users.length === 0) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;