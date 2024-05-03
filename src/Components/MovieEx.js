import React from "react";

function MovieEx(Props) {
  return (
    <div className="movie">
      <figure>
        <img src={Props.path} alt="" />
        <figcaption>
          <h2>{Props.title}</h2>
          <p>{Props.caption}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default MovieEx;
