
import {containerStyle,headingStyle,listStyle,itemStyle} from "./Q5.css"
export default function TaskList({ data }) {
  

  const taskList = data.map((task, index) => (
    <li key={index} style={itemStyle}>
      {task}
    </li>
  ));

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Task List</h2>
      <ul style={listStyle}>{taskList}</ul>
    </div>
  );
}
