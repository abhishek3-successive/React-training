'use client';

import { useState } from 'react';
import styles from './Q7.css';
import { submitPost } from '../Api-Data/axios/post'; 

const PostForm = () => {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const postData = {
      name: post,
      title: title,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    const { success, response, error } = await submitPost(postData);

    if (success) {
      setSuccessMessage('Post submitted successfully!');
      setError(null);
      setPost('');
      setTitle('');
    } else {
      setError(error || 'Something went wrong');
      setSuccessMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a Post</h2>
      <form onSubmit={onSubmitHandler}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="title">Post Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="content">Post Content:</label>
          <textarea
            id="content"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <button
          type="submit"
          style={styles.button}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#005bb5')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0070f3')}
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
