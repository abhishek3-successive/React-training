'use client';
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text: input.trim(), completed: false }]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleCompleted = (index)=>{
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Add new todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((value, index) => (
          <li key={index}>{value.text} 
         <input
                type="checkbox"
                checked={todos.completed}
                onChange={() => toggleCompleted(index)}
              />
              <button
              onClick={()=>deleteTodo(index)}
              > delete</button>
         </li>
        ))}
        
      </ul>
    </>
  );
}
