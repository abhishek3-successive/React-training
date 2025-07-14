// This is a Server Component
import UserList from "./Q16.client";
import { fetchUsers } from "../Api-Data/externalCalls";

const Page = async () => {
   const { users, hasError } = await fetchUsers();
console.log(users, `aaaaaaaaaaaaaaaaaaaaaa`);
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔁 SSR + Client Component via HOC</h1>

      {hasError ? (
        <p style={{ color: 'red' }}>Error loading users </p>
      ) : (
        <UserList data={users} />
      )}
    </main>
  );
};

export default Page;
