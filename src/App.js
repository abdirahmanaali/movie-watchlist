import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  // State variables
  const [list, setList] = useState([]); // List of movies in the watchlist
  const [movieList, setMovieList] = useState([]); // List of movies fetched from API
  const [page, setPage] = useState(1); // Current page number for API pagination

  // Function to add a movie to the watchlist
  const addMovie = (movie) => setList([...list, movie]);

  // Function to remove a movie from the watchlist
  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState);
  };

  // Function to fetch movie data from API
  const getData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );
      setMovieList(response.data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }, [page]);

  // Fetch movie data on component mount and whenever the page state changes
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <Header /> {/* Header component */}
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          removeMovie={removeMovie}
        /> {/* MovieScreen component */}
        <Watchlist list={list} removeMovie={removeMovie} /> {/* Watchlist component */}
      </main>
    </div>
  );
}

export default App;
