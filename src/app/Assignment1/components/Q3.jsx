// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

const Weather = ({ temperature }) => {
    if(!isNaN(temperature)){
        if (temperature > 25) {
    return <p>It's sunny today!</p>;
  } else if (temperature < 10) {
    return <p>It's cold today!</p>;
  } else {
    return <p>The weather is moderate today.</p>;
  }
    }
    else{
  return (<p>enter the correct value</p>);
}
};

export default Weather;