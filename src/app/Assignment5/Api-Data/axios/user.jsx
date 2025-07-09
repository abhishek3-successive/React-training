import axios from 'axios';

export async function fetchUsers() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return { users: res.data, hasError: false };
  } catch (error) {
    return { users: [], hasError: true };
  }
}
