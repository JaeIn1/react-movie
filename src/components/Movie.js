import React from "react";
import PropTypes from "prop-types";

export default function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
