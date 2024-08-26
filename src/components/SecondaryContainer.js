import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-20 relative z-20">
        <MovieList title={"Now Playing Movies"}movies={movies.nowPlayingMovies}/> 
        </div>
        <MovieList title={"Top Rated Movies"}movies={movies.topRated}/> 
        <MovieList title={"Popular Movies"}movies={movies.popular}/> 
        <MovieList title={"UpComing Movies"}movies={movies.upcoming}/> 

    </div>
    
    )
  );
}

export default SecondaryContainer;
