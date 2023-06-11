import React from "react";

// MovieCard component displays individual movie information and provides options to add or remove from the watchlist
const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
  // Check if the movie is already in the watchlist
  const inWatchlist = list.filter((mov) => {
    return mov.id === movie.id;
  });

  // Display appropriate button based on whether the movie is in the watchlist or not
  const button = inWatchlist.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button> // Button to add the movie to the watchlist
  ) : (
    <button onClick={() => removeMovie(movie)}>Remove</button> // Button to remove the movie from the watchlist
  );

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} /> {/* Movie poster image */}
        <h3>{movie.original_title}</h3> {/* Movie title */}
      </div>
      {button} {/* Add or remove button */}
    </div>
  );
};

export default MovieCard;
