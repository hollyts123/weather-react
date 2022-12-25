import React, { useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState('');
  let [weather, setWeather] = useState({});
  let [unit, setUnit] = useState('C');


  function showCelsius(event) {
    event.preventDefault();
    setUnit("C");

    function convertToFahrenheit(response) {
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      })
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b533bb31ab6b7d26400f4e2f73516e81&units=metric`;
    axios.get(url).then(convertToFahrenheit);
  }


  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("F");

    function convertToFahrenheit(response) {
      setWeather({
        temperature: response.data.main.temp * 9/5 + 32,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      })
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b533bb31ab6b7d26400f4e2f73516e81&units=metric`;
    axios.get(url).then(convertToFahrenheit);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);

    function showWeather(response) {
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      })
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b533bb31ab6b7d26400f4e2f73516e81&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
  }

  if (loaded) {
    return (
      <div className="App">

        {/* Search bar*/}
        <div className="Search">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              id="search-input"
              placeholder="Search"
              autofocus
              onChange={changeCity}
            />
            <input type="submit" class="search-btn" value="🔍" />
          </form>
        </div>

        {/* Main content */}
        <div className="MainContent">
          <div className="temp">
            <span id="celsius" onClick={showCelsius}>°C </span>/<span id="fahrenheit" onClick={showFahrenheit}> °F</span>
          </div>

          <div className="text">
            <h1>
              <span className="city" id="city">
                {city}
              </span>{" "}
              <br />
              <span id="temperature" className="degree">
                {Math.round(weather.temperature)}°{unit}
              </span>
              <br />
            </h1>
            <p>Saturday, 26th<br /> November 2022</p>
            <p id="description"></p>
          </div>
          <div className="text">
            <ul>
              <li id="humidity">Humidity: {weather.humidity}%</li>
              <li id="wind">Wind: {weather.wind} Km/H</li>
              <li id="description">{weather.description}</li>
            </ul>
          </div>
          <div className="icon">
            <img
              src={weather.icon}
              alt="Icon"
              id="icon"
            />
          </div>
        </div>
      </div>

    );
  } else {
    return (
      <div className="App">

        {/* Search bar*/}
        <div className="Search">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              id="search-input"
              placeholder="Search"
              autofocus
              onChange={changeCity}
            />
            <input type="submit" class="search-btn" value="🔍" />
          </form>
        </div>

        {/* Main content */}
        <div className="MainContent">
          <div className="temp">
            <span id="celsius">°C </span>/<span id="fahrenheit"> °F</span>
          </div>

          <div className="text">
            <h1>
              <span className="city" id="city">
                Nikopol
              </span>{" "}
              <br />
              <span id="temperature" className="degree">
                8°C
              </span>
              <br />
            </h1>
            <p>Saturday, 26th<br /> November 2022</p>
          </div>
          <div className="text">
            <ul>
              <li id="humidity">Humidity: 23%</li>
              <li id="wind">Wind: 3 Km/H</li>
              <li id="description">Clear</li>
            </ul>
          </div>
          <div className="icon">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Icon"
              id="icon"
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
