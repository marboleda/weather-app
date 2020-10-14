import React from 'react';

const search = (props) => {

    const { update } = props;

    const handleSearch = () => {
        const cityName = document.getElementById('searchInput').value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a7be9f905cd3da9bb04819dd3df2b03e`, {mode: 'cors'})
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                const weatherObj = {};
                weatherObj.temp = data.main.temp;
                weatherObj.unit = 'C';
                weatherObj.feelsLike = data.main.feels_like;
                weatherObj.description = data.weather[0].main;
                weatherObj.cityName = data.name;
                console.log(weatherObj);
                update(weatherObj);
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