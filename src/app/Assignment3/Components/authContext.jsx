'use client';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("GGGOku");

  const login = () => setIsLoggedIn(true);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, username }}>
      {children}
    </AuthContext.Provider>
  );
}