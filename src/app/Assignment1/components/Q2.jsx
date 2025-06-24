export default function UserCard({ url, username, email }) {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '250px',
    margin: '16px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    marginBottom: '12px',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '8px 0 4px',
  };

  const emailStyle = {
    fontSize: '0.9rem',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src={url} alt="avatar" style={imageStyle} />
      <p style={nameStyle}>Hello {username}</p>
      <p style={emailStyle}>Your email is {email}</p>
    </div>
  );
}
