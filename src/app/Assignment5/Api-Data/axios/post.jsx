import axios from 'axios';

export async function submitPost(postData) {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
    return { success: true, response: res.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
