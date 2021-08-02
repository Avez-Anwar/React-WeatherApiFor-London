import axios from "axios";
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04794127ed8dd51b3f4b806399afef77`
    );
    console.log(response.data);
    setWeather(response.data);
  };

  return (
    <div>
      <form onSubmit={fetchWeather}>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      React Weather Report
      <h4>React weather information</h4>
      <h4>Wind: {weather?.wind.speed}</h4>
      <h4>
        City: {weather?.name},{weather?.sys.country}
      </h4>
      <h4>Temperature: {`${Math.floor(weather?.main.temp - 273)}°C`}</h4>
    </div>
  );
}

export default App;
