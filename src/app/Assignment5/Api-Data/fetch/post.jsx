export async function fetchPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    return { posts, hasError: false };
  } catch (error) {
    return { posts: [], hasError: true };
  }
}
