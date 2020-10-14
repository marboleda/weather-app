import React from 'react';

const results = (props) => {

    const { weatherObj } = props;


    return (
        <div className="results">
            <h2>{weatherObj.cityName}</h2>
            <div>
                <span>{weatherObj.temp}</span><span>{'\u00B0'}{weatherObj.unit}</span>
            </div>
            <p>Feels like: <span>{weatherObj.feelsLike}</span></p>
            <span>{weatherObj.description}</span>
        </div>
    );
}

export default results;