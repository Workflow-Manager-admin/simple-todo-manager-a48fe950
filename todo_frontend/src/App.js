import React from "react";
import "./App.css";
import TodoPage from "./TodoPage";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <main>
        <TodoPage />
      </main>
    </div>
  );
}

export default App;
