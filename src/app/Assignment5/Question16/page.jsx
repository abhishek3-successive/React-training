// This is a Server Component
import UserList from "./Q16.client";
import { fetchUsers } from "../Api-Data/axios/user";

const Page = async () => {
  const { data, error, message } = await fetchUsers();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔁 SSR + Client Component via HOC</h1>

      {error ? (
        <p style={{ color: 'red' }}>Error loading users: {message}</p>
      ) : (
        <UserList data={data} />
      )}
    </main>
  );
};

export default Page;
