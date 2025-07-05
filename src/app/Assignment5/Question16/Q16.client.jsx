
'use client';

export default function UserList({ data }) {
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
