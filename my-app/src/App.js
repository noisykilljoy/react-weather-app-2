import logo from "./logo.svg";
import "./App.css";
import SearchEng from "./searchEng";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>weather search</h1>
        <SearchEng />
        <p>made by Vandah</p>
        <a href="https://github.com/noisykilljoy/weather-react-app">
          github repository
        </a>
      </header>
    </div>
  );
}

export default App;
