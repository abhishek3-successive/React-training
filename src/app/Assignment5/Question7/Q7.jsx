'use client';

import axios from 'axios';
import { useState } from 'react';
import styles from './Q7.css';

const PostForm = () => {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = {
      name: post,
      title: title,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    await axios.post('https://jsonplaceholder.typicode.com/posts', result);
    alert('Submitted!');

    setPost('');
    setTitle('');
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
