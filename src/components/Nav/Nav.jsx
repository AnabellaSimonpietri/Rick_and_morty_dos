import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <Link to="/home">
          <h3>Home</h3>
        </Link>
        <Link to="/favorites">
          <h3>Favorites</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <SearchBar onSearch={this.props.onSearch} />
      </div>
    );
  }
}

export default Nav;
