'use client';

export default function UserList({ data }) {
  if (!Array.isArray(data)) {
    return <p style={{ color: 'red' }}>No user data available.</p>;
  }

  return (
    <div>
      <h2>Client-side Rendered List:</h2>
      <ul>
        {data.slice(0, 5).map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
