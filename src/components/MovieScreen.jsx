import React from "react";
import MovieCard from "./MovieCard";

// MovieScreen component displays a list of movies and allows adding movies to the watchlist
const MovieScreen = ({ addMovie, movieList, page, setPage, list, removeMovie }) => {
  // Function to decrement the page number
  const decrement = () => setPage(page - 1);

  // Function to increment the page number
  const increment = () => setPage(page + 1);

  // Generate movie cards for each movie in the movieList
  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard key={movie.id} addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie} />;
  });

  return (
    <div className="page">
      <h1>Abdirahman Movie Theatre</h1> {/* Title */}
      <h3>Add a movie to your watchlist!</h3> {/* Description */}
      <div className="btn-container">
        <button onClick={page !== 1 ? decrement : undefined}>Previous</button> {/* Button to go to previous page, disabled if already on the first page */}
        <button onClick={increment}>Next</button> {/* Button to go to next page */}
      </div>
      <div className="movie-container">{movieDisplay}</div> {/* Container for displaying movie cards */}
    </div>
  );
};

export default MovieScreen;
