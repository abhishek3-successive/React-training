'use client'
// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

// import
import React, { useState } from "react";
import {
  containerStyle,
  headingStyle,
  inputSectionStyle,
  inputStyle,
  addButtonStyle,
  todoListStyle,
  todoItemStyle,
  completedTodoStyle,
  checkboxStyle,
  todoTextStyle,
  deleteButtonStyle,
  emptyMessageStyle
} from "./Q3.css";

function ToDoList() {
  // State to store all todos
  const [todos, setTodos] = useState([]);
  // State to store input value
  const [input, setInput] = useState("");

  // Function to add new todo
  const addTodo = () => {
    if (!input.trim()) return; // Don't add empty todos
    setTodos([
      ...todos,
      { text: input.trim(), completed: false },
    ]);
    setInput(""); // Clear input after adding
  };

  // Function to toggle completed status by index
  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; 
    setTodos(newTodos);
  };

  // Function to delete todo by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My To-Do List</h1>
      
      {/* Input Section */}
      <div style={inputSectionStyle}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new todo..."
          style={inputStyle}
        />
        <button onClick={addTodo} style={addButtonStyle}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={todoListStyle}>
        {todos.length === 0 ? (
          <div style={emptyMessageStyle}>
            No todos yet. Add one above!
          </div>
        ) : (
          todos.map((todo, index) => (
            <li 
              key={index} 
              style={todo.completed ? completedTodoStyle : todoItemStyle}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
                style={checkboxStyle}
              />
              <span style={todoTextStyle}>
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(index)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ToDoList;