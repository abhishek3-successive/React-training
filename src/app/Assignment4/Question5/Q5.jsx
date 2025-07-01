// 5.Construct a select dropdown menu with multiple options. 
// Control the selected option using state. When an option is selected, display a message showing the selected value.
'use client'
import { useState } from "react";

export default function Dropdown(){
    const [select , setselect] = useState(0)

    const handleselect = (e)=> setselect(e.target.value); 
    const selectData = [
        'option1',
        'option2',
        'option3'
    ]
    return(
        <>
        <select value={select} onChange={handleselect}>
                {selectData.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <h1> your selected option is : {select}</h1>
        </>
    );
}