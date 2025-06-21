import React from "react";
import "./banner.css";

const Banner = ({ anime }) => (
  <section className="banner">
    <div className="banner__title">Explore</div>
    <div className="banner__subtitle">What are you gonna watch today ?</div>
    <div
      className="banner__main"
      style={{
        backgroundImage: `url(${anime.image})`,
      }}
    >
      <div className="banner__overlay"></div>
      <div className="banner__content">
        <h2>{anime.movieName}</h2>
        <p>{anime.description}</p>
      </div>
    </div>
  </section>
);

export default Banner;