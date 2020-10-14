import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

const App = () =>  {

  const [weatherObj, setWeatherObj] = useState({});

  return (
    <div className="App">
      <Header />
      <Search update={setWeatherObj} />
      <Results weatherObj={weatherObj} />
    </div>
  );
}

export default App;
