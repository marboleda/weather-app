import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

const App = () =>  {

  const [weatherObj, setWeatherObj] = useState({});

  return (
    <div className="App">
      <Header />
      <Search weatherObj={weatherObj} />
      <Results weatherObj={weatherObj} />
    </div>
  );
}

export default App;
