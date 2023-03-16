import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
import style from "./App.modules.css";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className="nav">
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App;
