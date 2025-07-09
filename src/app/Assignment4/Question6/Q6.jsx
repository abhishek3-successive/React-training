// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them.
//  Use controlled components to handle the input and update the list of tasks.
'use client';
import { useState } from "react";
import styles from './Q6.css'


export default function TodoList() {
    const [taskList, setTaskList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== "") {
            setTaskList([...taskList, inputValue]);
            setInputValue(""); // Clear input after adding
        }
    };


    return (
        <div style={styles.container}>
            <div>
                <input
                    type="text"
                    placeholder="Enter the task"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={styles.input}
                />
                <button onClick={handleAddTask} style={styles.button}>Add</button>
            </div>

            <h2 style={styles.heading}>Your task list:</h2>
            <ul style={styles.list}>
                {taskList.map((task, index) => (
                    <li key={index} style={styles.listItem}>{task}</li>
                ))}
            </ul>
        </div>
    );
}
