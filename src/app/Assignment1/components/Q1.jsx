function Greeting() {
  const headingStyle = {
    fontSize: '2rem',
    color: '#0070f3',
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  };

  return (
    <h1 style={headingStyle}>Hello, Next.js!</h1>
  );
}

export default Greeting;
