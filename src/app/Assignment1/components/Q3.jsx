const Weather = ({ temperature }) => {
  const textStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  if (isNaN(temperature)) {
    return <p style={textStyle}>Enter the correct value</p>;
  }

  if (temperature > 25) {
    return <p style={textStyle}>It's sunny today!</p>;
  } else if (temperature < 10) {
    return <p style={textStyle}>It's cold today!</p>;
  } else {
    return <p style={textStyle}>The weather is moderate today.</p>;
  }
};

export default Weather;
