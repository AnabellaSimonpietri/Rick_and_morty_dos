import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.css";
import React from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.myfavorites);

  return (
    <div className={style.cards}>
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
