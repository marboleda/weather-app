import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    background-color: #2c3142;
    padding-bottom: 1vh;
`
const SearchButton = styled.button`
    background-color: rgb(49, 49, 49);
    color: #cccc00;
    margin-left: 1vw;
`;
const Search = (props) => {

    const { update, apiKey } = props;

    const searchBarRef = useRef(null);

    useEffect(() => {
        searchBarRef.current.focus();
    });

    const handleSearch = () => {
        const cityName = document.getElementById('searchInput').value;

        //Make API call via Promise (fetch call)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`, {mode: 'cors'})
            .then((response) => {
                return response.json();
            }).then((data) => {
                const weatherObj = {};
                weatherObj.temp = data.main.temp;
                weatherObj.unit = 'C';
                weatherObj.feelsLike = data.main.feels_like;
                weatherObj.description = data.weather[0].main;
                weatherObj.cityName = data.name;
                update(weatherObj);

                console.log(data);
                console.log(weatherObj);
            });


    }

    const handleEnterKey = (e) => {
        console.log(e.keyCode);
        if (e.key === 'Enter') {
          handleSearch();
        }
      }

    return (
        <SearchContainer>
            <input type="text" 
                   id="searchInput" 
                   ref={searchBarRef}
                   onKeyDown={handleEnterKey}
                   placeholder="Enter City Here" />
            <SearchButton 
                id="searchButton"
                onClick={handleSearch}>
                Search
            </SearchButton>
        </SearchContainer>
    );
}

export default Search;