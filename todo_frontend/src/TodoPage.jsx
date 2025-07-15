import React, { useState } from "react";
import "./TodoPage.css";

// PUBLIC_INTERFACE
export default function TodoPage() {
  // todos: { id, text, completed }
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // "all" | "completed"

  // PUBLIC_INTERFACE
  const handleInputChange = (e) => setInput(e.target.value);

  // PUBLIC_INTERFACE
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      { text: input.trim(), id: Date.now(), completed: false },
      ...todos,
    ]);
    setInput("");
  };

  // PUBLIC_INTERFACE
  const handleToggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // PUBLIC_INTERFACE
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((t) => t.completed);

  return (
    <div className="todo-frame">
      <h1 className="todo-title">Todo List</h1>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          className="todo-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your todo"
          aria-label="Enter your todo"
        />
        <button className="todo-add-btn" type="submit">
          Add
        </button>
      </form>
      <section className="todo-list-section">
        <TodoFilterNav filter={filter} setFilter={setFilter} />
        <ul className="todo-list" role="list">
          {filteredTodos.length === 0 && (
            <li className="todo-empty">No todos {filter === "completed" ? "completed yet!" : "yet!"}</li>
          )}
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  opacity: todo.completed ? 0.6 : 1,
                  cursor: "pointer",
                  marginRight: 12,
                }}
                onClick={() => handleToggleCompleted(todo.id)}
                tabIndex={0}
                aria-checked={todo.completed}
                role="checkbox"
              >
                {todo.text}
              </span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  marginLeft: 10,
                  cursor: "pointer",
                  color: "#adadad",
                  fontSize: "1.2em",
                }}
                title="Delete"
                aria-label={`Delete "${todo.text}"`}
                onClick={() => handleDelete(todo.id)}
              >
                &#x1F5D1;
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function TodoFilterNav({ filter, setFilter }) {
  return (
    <nav style={{ marginBottom: "1rem" }}>
      <button
        className="todo-filter-btn"
        style={{
          fontWeight: filter === "all" ? 700 : 400,
          color: filter === "all" ? "#7f56d9" : "#888",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1em",
          marginRight: "1.5em",
        }}
        aria-label="Show all todos"
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className="todo-filter-btn"
        style={{
          fontWeight: filter === "completed" ? 700 : 400,
          color: filter === "completed" ? "#7f56d9" : "#888",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1em",
        }}
        aria-label="Show completed todos"
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </nav>
  );
}
