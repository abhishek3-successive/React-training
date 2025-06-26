const containerStyle = {
  maxWidth: '600px',
  margin: '50px auto',
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'white',
  border: '2px solid #ddd',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const headingStyle = {
  fontSize: '28px',
  color: '#333',
  textAlign: 'center',
  marginBottom: '30px',
};

const inputSectionStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: '30px',
};

const inputStyle = {
  flex: '1',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '5px',
  outline: 'none',
};

const addButtonStyle = {
  padding: '12px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const todoListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

const todoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  marginBottom: '10px',
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '5px',
};

const completedTodoStyle = {
  ...todoItemStyle,
  backgroundColor: '#d4edda',
  textDecoration: 'line-through',
  color: '#6c757d',
};

const checkboxStyle = {
  marginRight: '15px',
  width: '18px',
  height: '18px',
  cursor: 'pointer',
};

const todoTextStyle = {
  flex: '1',
  fontSize: '16px',
  margin: '0',
};

const deleteButtonStyle = {
  padding: '8px 15px',
  fontSize: '14px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginLeft: '10px',
};

const emptyMessageStyle = {
  textAlign: 'center',
  fontSize: '18px',
  color: '#6c757d',
  fontStyle: 'italic',
  padding: '40px 0',
};

export {
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
};