
'use client';

import { useState } from 'react';
import Button from './Button';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Reusable Button Component Demo</h1>
      <p>Count: {count}</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Primary Increment
        </Button>

        <Button variant="secondary" onClick={() => setCount(count - 1)}>
          Secondary Decrement
        </Button>

        <Button variant="danger" onClick={() => setCount(0)}>
          Danger Reset
        </Button>

        <Button disabled onClick={() => alert('This won’t trigger')}>
          Disabled
        </Button>
      </div>
    </main>
  );
}
