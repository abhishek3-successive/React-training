'use client';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    </AuthProvider>
  );
}