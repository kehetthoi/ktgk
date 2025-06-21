import React from "react";
import "./Item.css";

const Item = ({ anime, onClick, isActive }) => (
  <div
    className={`item ${isActive ? "item--active" : ""}`}
    onClick={() => onClick(anime)}
  >
    <img src={anime.image} alt={anime.movieName} />
    <div className="item__info">
      <div className="item__episode">Episode {anime.episode}</div>
      <div className="item__name">{anime.movieName}</div>
    </div>
  </div>
);

export default Item;