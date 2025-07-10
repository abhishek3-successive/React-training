'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 🔒 Higher-Order Component
const withAuth=(WrappedComponent)=>{
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const [checkedAuth, setCheckedAuth] = useState(false);

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('auth') === 'true';
      if (!isLoggedIn) {
        router.replace('/'); // Redirect to login if not authenticated
      } else {
        setCheckedAuth(true);
      }
    }, [router]);

    if (!checkedAuth) return <p>Checking authentication...</p>;

    return <WrappedComponent {...props} />;
  };
}

// 🔐 Protected Component
const  ProtectedPage=()=> {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    router.replace('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔐 Protected Page</h1>
      <p>You are logged in and can access this content.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

// ✅ Wrapped with auth protection
const ProtectedWithAuth = withAuth(ProtectedPage);

// 🧑‍💻 Login Page Logic
const Home=()=> {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('auth') === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    router.replace('/?protected=true');
  };

  // Handle navigation to protected page
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('protected') === 'true') {
      setTimeout(() => router.push('/'), 0); // Push to rerender and trigger HOC
    }
  }, [router]);

  return isLoggedIn ? (
    <ProtectedWithAuth />
  ) : (
    <div style={{ padding: '2rem' }}>
      <h1>🔓 Login Page</h1>
      <p>You must log in to view protected content.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
export default Home
