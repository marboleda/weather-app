import React from 'react';

const search = (props) => {

    const { update, apiKey } = props;

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

    return (
        <div className="search">
            <input type="text" id="searchInput" placeholder="Enter City Here" />
            <button id="searchButton" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default search;