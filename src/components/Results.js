import React from 'react';

const results = (props) => {

    const { weatherObj } = props;
    //Check if weather object is empty and render conditionally based on that
    //May be more useful to use styling instead to accomplish this?
    const isWeatherObjEmpty = Object.keys(weatherObj).length === 0 && weatherObj.constructor === Object;


    return (
        <div className="results">
            <h2>{weatherObj.cityName}</h2>
            <div>
                <span>{weatherObj.temp}</span> { isWeatherObjEmpty ? null : <span>{'\u00B0'}{weatherObj.unit}</span> }
            </div>
            { isWeatherObjEmpty ? null : <p>Feels like: <span>{weatherObj.feelsLike}</span></p> }
            <span>{weatherObj.description}</span>
        </div>
    );
}

export default results;