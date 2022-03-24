// import CityComponent from "./modules/CityComponent";

import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponenet from "./modules/WeatherinfoComponent";
// import WeatherComponenet from "./modules/WeatherinfoComponent";

const API_KEY = "c1feacb2804844b8858d68d9df4301a5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updaterWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updaterWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? (
        <WeatherComponenet weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
