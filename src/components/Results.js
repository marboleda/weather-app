import React from 'react';
import styled from 'styled-components';

const results = (props) => {

    const { changeUnit, unit, weatherObj } = props;

    //Check if weather object is empty and render conditionally based on that
    const isWeatherObjEmpty = Object.keys(weatherObj).length === 0 && weatherObj.constructor === Object;

    const Results = styled.div`
        padding-top: 2vh;
        background-color: #545b72;
        flex-grow: 1;
        text-align: center;
    `

    const ResultsBox = styled.div`
        display: ${isWeatherObjEmpty ? "none" : "inline-block"};
        padding: 10px;
        border: 5px solid #000080;
        border-radius: 5px;
        background-color: #ffcc00;
    `

    const City = styled.h2`
        margin-top: 0px;
    `

    const Unit = styled.span`
        display: ${isWeatherObjEmpty ? "none" : "inline"};
    `

    const FeelsLikeSection = styled.p`
        display: ${isWeatherObjEmpty ? "none" : "block"};
    `

    const UnitSelection = styled.div`
        display: ${isWeatherObjEmpty ? "none" : "block"};
        margin-top: 2vh;
    `

    return (
        <Results>
            <ResultsBox>
                <City>{weatherObj.cityName}</City>
                <div>
                    <span>{weatherObj.temp}</span> <Unit>{'\u00B0'}{weatherObj.unit}</Unit>
                </div>
                <FeelsLikeSection>Feels like: <span>{weatherObj.feelsLike}</span></FeelsLikeSection>
                <span>{weatherObj.description}</span>
                <br />
                <UnitSelection>
                    <input type="radio" 
                        id="celsius" 
                        name="unit" 
                        value="C" 
                        checked={unit === 'C'}
                        onClick={(e) => changeUnit(e.target.value)}/>
                    <label htmlFor="celsius">Celsius</label>
                    <input type="radio" 
                        id="fahrenheit" 
                        name="unit" 
                        value="F"
                        checked={unit === 'F'} 
                        onClick={(e) => changeUnit(e.target.value)}/>
                    <label htmlFor="fahrenheit">Fahrenheit</label>
                </UnitSelection>
            </ResultsBox>
        </Results>
    );
}

export default results;