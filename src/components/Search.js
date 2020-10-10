import React from 'react';

const search = () => {

    const handleSearch = () => {
        const cityName = document.getElementById('searchInput').value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a7be9f905cd3da9bb04819dd3df2b03e`, {mode: 'cors'})
            .then((response) => {
                console.log('Response: ', response);
                return response.json();
            }).then((data) => {
                console.log(data);
            })
    }

    return (
        <div className="search">
            <input type="text" id="searchInput" placeholder="Enter City Here" />
            <button id="searchButton" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default search;