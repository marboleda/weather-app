import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import styled from 'styled-components';

const AppDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

const App = () =>  {

  const [weatherObj, setWeatherObj] = useState({});
  const [unitSelected, setUnitSelected] = useState('C');
  const API_KEY = 'a7be9f905cd3da9bb04819dd3df2b03e';

  const handleUnitChange = async (unitCode) => {
    // Don't do anything if weather object is empty
    const isWeatherObjEmpty = Object.keys(weatherObj).length === 0 && weatherObj.constructor === Object;
    if (!isWeatherObjEmpty) {
      // Make API call via asynchronous function
      const unitType = unitCode === 'F' ? 'imperial' : 'metric';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherObj.cityName}&units=${unitType}&appid=${API_KEY}`)
      const weatherData = await response.json();
      const newWeatherObj = {...weatherObj};
      newWeatherObj.unit = unitCode;
      newWeatherObj.temp = weatherData.main.temp;
      newWeatherObj.feelsLike = weatherData.main.feels_like;
      setWeatherObj(newWeatherObj);
    }

    if (unitCode === 'C') {
      setUnitSelected('C');
    } else {
      setUnitSelected('F');
    }
  }

  return (
    <AppDiv>
      <Header />
      <Search update={setWeatherObj} apiKey={API_KEY}/>
      <Results changeUnit={handleUnitChange} unit={unitSelected} weatherObj={weatherObj} />
    </AppDiv>
  );
}

export default App;
