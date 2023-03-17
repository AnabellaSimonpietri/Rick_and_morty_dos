import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.modules.css";

function App() {
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "dda0e615d14c.cfb009cdce3a34cdfd7f";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Error");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const [characters, setCharacters] = useState([]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
