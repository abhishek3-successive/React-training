'use client'
// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

// import 
import { useState } from "react"

// export 
export default function PersonForm(){
    const [firstname , setfirstname] = useState('');
    const [lastname , setlastname] = useState('');
    const [age , setage] = useState('');
    return(
        
       <div>
      <h2>Person Form</h2>

      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstname} 
          onChange={(e) => setfirstname(e.target.value)} 
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastname} 
          onChange={(e) => setlastname(e.target.value)} 
        />
      </div>

      <div>
        <label>Age:</label>
        <input 
          type="text" 
          value={age} 
          onChange={(e) => setage(e.target.value)} 
        />
      </div>

      <h3>Entered Information</h3>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Age: {age}</p>
    </div>
    
    );
}