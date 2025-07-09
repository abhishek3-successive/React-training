export async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();
    return { users, hasError: false };
  } catch (error) {
    return { users: [], hasError: true };
  }
}
