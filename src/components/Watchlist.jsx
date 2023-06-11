import React from "react";
import MovieCard from "./MovieCard";

// Watchlist component displays the list of movies in the watchlist
const Watchlist = ({ list, removeMovie }) => {
  // Generate movie cards for each movie in the watchlist
  const movieDisplay = list.map((movie) => {
    return (
      <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} list={list} />
    );
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1> {/* Title */}
      <div className="movie-container">{movieDisplay}</div> {/* Container for displaying movie cards */}
    </div>
  );
};

export default Watchlist;
