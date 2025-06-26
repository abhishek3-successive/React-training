// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

"use client";

import { useMemo, useState } from "react";

export default function StudentList() {
  let studentList = ["Student "];
  const [list, setList] = useState([studentList]);

  const addStudent = () =>
    setList((prevStudents) => [
      ...prevStudents,
      `Student ${prevStudents.length + 1}`,
    ]);

  const memoisedStudents = useMemo(() => list, [list]);
  return (
  <>
      <h1>Student List</h1>
      <ul>
        {memoisedStudents.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>

      <button onClick={addStudent}> Add New Student</button>
    </>
  );
}