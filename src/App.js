import "./App.css";

function App() {
  return (
    <div className="App">
      <div>

        {/* Search bar*/}
        <div className="Search">
          <form className="search-bar">
            <input
              type="text"
              className="search"
              id="search-input"
              placeholder="Search"
              autofocus
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
            <p id="description"></p>
          </div>
          <div className="text">
            <ul>
              <li id="humidity">Humidity: 23%</li>
              <li id="wind">Wind: 3 Km/H</li>
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
    </div>

  );
}

export default App;
