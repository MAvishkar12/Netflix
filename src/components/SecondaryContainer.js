import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from '../utils/languageConstant'
function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  const langkey=useSelector(store=>store.config.lang)
  
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-20 relative z-20">
        <MovieList title={lang[langkey].NowPlaytitle}movies={movies.nowPlayingMovies}/> 
        </div>
        <MovieList title={lang[langkey].Toptitle}movies={movies.topRated}/> 
        <MovieList title={lang[langkey].Populartitle}movies={movies.popular}/> 
        <MovieList title={lang[langkey].Upcomingtitle}movies={movies.upcoming}/> 

    </div>
    
    )
  );
}

export default SecondaryContainer;
