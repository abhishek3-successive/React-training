// App.jsx or index.js
import React from 'react';
import { ThemeProvider } from '../context/theme';
import Theme from '../components/Q9'; // Your Q9 component

function App() {
  return (
    <ThemeProvider>
      <Theme/>
      {/* Other components */}
    </ThemeProvider>
  );
}

export default App;
