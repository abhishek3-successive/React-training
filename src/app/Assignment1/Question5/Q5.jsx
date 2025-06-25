export default function TaskList({ data }) {
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#0070f3',
  };

  const listStyle = {
    listStyleType: 'square',
    padding: '0',
  };

  const itemStyle = {
    fontSize: '1.1rem',
    color: 'white',
    margin: '8px 0',
  };

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
