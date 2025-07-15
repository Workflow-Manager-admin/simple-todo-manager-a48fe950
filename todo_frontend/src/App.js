import React, { useState, useEffect } from 'react';
import './App.css';
import TodoPageFrame from './TodoPageFrame';
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {/* Render the Figma-based TODO page frame */}
        <TodoPageFrame>
          {/* Additional global children could be added here if needed */}
        </TodoPageFrame>
        {/* Optionally show theme info below */}
        <div style={{ marginTop: "16px" }}>
          <span style={{ color: "var(--text-secondary)" }}>
            Current theme: <strong>{theme}</strong>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
