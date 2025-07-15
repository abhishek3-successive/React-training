'use client';

import { useReducer } from 'react';
import { fetchUsersData } from '../Api-Data/externalCalls';

const initialState = {
  loading: false,  
  users: null,
  error: null,
  showError: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null, showError: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, users: null, error: action.payload };
    case 'SHOW_ERROR':
      return { ...state, showError: true };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


const RetryFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, users, error, showError } = state;

  const handleRetry = async () => {
    dispatch({ type: 'FETCH_START' });

    try {
      let { users, hasError } = await fetchUsersData();
      hasError=false
      if (hasError) {
        dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch users' });
      } else {
        dispatch({ type: 'FETCH_SUCCESS', payload: users });
      }
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message || 'Unknown error' });
    }
  };

  if (loading) return <p>Retrying...</p>;

  if (users?.length) {
    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(({ id, name, email }) => (
          <li key={id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{name}</h3>
            <p>{email}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      {error && (
        <>
          {!showError ? (
            <button
              onClick={() => dispatch({ type: 'SHOW_ERROR' })}
              style={{ marginBottom: '1rem' }}
            >
              Show Error Message
            </button>
          ) : (
            <p style={{ color: 'red' }}>Retry failed: {error}</p>
          )}
        </>
      )}

      <button onClick={handleRetry} style={{ padding: '0.5rem 1rem' }}>
        Retry
      </button>
    </div>
  );
};

export default RetryFetch;

