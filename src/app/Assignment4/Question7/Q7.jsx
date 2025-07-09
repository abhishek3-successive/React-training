// 7.Design a search filter component that consists of an input field. 
// As the user types into the input, use controlled components to filter a list of items displayed below. 
// The list should dynamically update to show only items matching the search query.
'use client';
import { useState } from "react";
import styles from "./Q7.css";

export default function FilterCompo() {
    const items = ['Abhishek', 'Goku', 'Vegeta', 'Naruto', 'Luffy'];
    const [query, setQuery] = useState("");

    const handleInput = (e) => setQuery(e.target.value.toLowerCase());

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query)
    );

   

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInput}
                style={styles.input}
            />
            <ul style={styles.list}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index} style={styles.listItem}>{item}</li>
                    ))
                ) : (
                    <li style={styles.noMatch}>No match found</li>
                )}
            </ul>
        </div>
    );
}
