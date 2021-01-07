import React from 'react';
import styled from 'styled-components';

const results = (props) => {

    const { changeUnit, weatherObj } = props;
    //Check if weather object is empty and render conditionally based on that
    const isWeatherObjEmpty = Object.keys(weatherObj).length === 0 && weatherObj.constructor === Object;

    const Unit = styled.span`
        display: ${isWeatherObjEmpty ? "none" : "inline"};
    `

    const FeelsLikeSection = styled.p`
        display: ${isWeatherObjEmpty ? "none" : "block"};
    `

    const UnitSelection = styled.div`
        display: ${isWeatherObjEmpty ? "none" : "block"}
    `

    return (
        <div className="results">
            <h2>{weatherObj.cityName}</h2>
            <div>
                <span>{weatherObj.temp}</span> <Unit>{'\u00B0'}{weatherObj.unit}</Unit>
            </div>
            <FeelsLikeSection>Feels like: <span>{weatherObj.feelsLike}</span></FeelsLikeSection>
            <span>{weatherObj.description}</span>
            <br />
            <UnitSelection>
                <input type="radio" id="celsius" name="unit" value="C" defaultChecked onClick={(e) => changeUnit(e.target.value)}/>
                <label htmlFor="celsius">Celsius</label>
                <input type="radio" id="fahrenheit" name="unit" value="F" onClick={(e) => changeUnit(e.target.value)}/>
                <label htmlFor="fahrenheit">Fahrenheit</label>
            </UnitSelection>
        </div>
    );
}

export default results;