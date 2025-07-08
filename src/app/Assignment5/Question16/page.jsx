// This is a Server Component by default
import UserList from "./Q16.client";

// HOC: Server-side data fetching and return client component with props
export default async function Page() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const res = await fetch(API_URL); // SSR fetch
  const data = await res.json();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔁 SSR + Client Component via HOC</h1>
      <UserList data={data} />
    </main>
  );
}
