// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

function Button({ text, color }) {
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    color: 'white'
  };
  return <button style={buttonStyle}>{text}</button>;
}

export default Button