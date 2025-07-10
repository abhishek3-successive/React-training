'use client'
import { useEffect, useState } from 'react';
import { insertData } from '../Api-Data/externalCalls';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const { posts, hasError } = await insertData();
      setPosts(posts);
      setHasError(hasError);
      setLoading(false);
    }

    getPosts();
  }, []);

  if (loading) return <p style={{ padding: '2rem' }}>Loading posts...</p>;
  if (hasError) return <p style={{ padding: '2rem', color: 'red' }}>Failed to fetch posts.</p>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Posts
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
