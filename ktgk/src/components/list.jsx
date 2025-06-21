import React from "react";
import Item from "./item.jsx";
import "./List.css";

const List = ({ data, onSelect, selectedId }) => (
  <section className="list">
    <div className="list__title">New Release</div>
    <div className="list__items">
      {data.map((anime) => (
        <Item
          key={anime.id}
          anime={anime}
          onClick={onSelect}
          isActive={anime.id === selectedId}
        />
      ))}
    </div>
  </section>
);

export default List;