'use client';

import axios from 'axios';
import { useState } from 'react';

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

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#222',
    },
    formGroup: {
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '6px',
      fontWeight: '600',
      fontSize: '16px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      minHeight: '100px',
      resize: 'vertical',
      transition: 'border-color 0.3s',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '18px',
      fontWeight: '700',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#0070f3',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#005bb5',
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
