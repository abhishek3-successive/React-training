import axios from 'axios';

 const  submitData = async (postData) => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
    return { success: true, response: res.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

 const fetchUsersData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return { users: res.data, hasError: false, errorMessage: null };
  } catch (error) {
    return { 
      users: [], 
      hasError: false, 
      errorMessage: error.response?.data?.message || error.message || 'Unknown error' 
    };
  }
}

 const  insertData= async()=> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    return { posts, hasError: false };
  } catch (error) {
    return { posts: [], hasError: true };
  }
}

 const fetchUsers= async()=> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();
    return { users, hasError: false };
  } catch (error) {
    return { users: [], hasError: true };
  }
}

 const fetchProducts= async(limit=10)=> {
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
  const data = await res.json();
  return {
    posts: data.posts,
    total: data.total
  };
}

export {fetchProducts,fetchUsers,insertData,fetchUsersData,submitData}