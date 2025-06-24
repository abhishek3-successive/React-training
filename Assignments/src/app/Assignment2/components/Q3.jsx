'use client'
// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

// import 
import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  // Toggle completed status by index
  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index] = !newTodos[index];
    setTodos(newTodos);
  };

  // Delete todo by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(index)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;