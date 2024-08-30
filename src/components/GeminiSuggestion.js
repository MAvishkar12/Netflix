import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


function GeminiSuggestion() {
    const movieNames =useSelector((store)=>store.gemini.movieNames)
    const movieResults =useSelector((store)=>store.gemini.movieResults)
   if(!movieNames) return null;

  return (
  <div className='p-4 m-4 bg-black text-white bg-opacity-95'>
        <div>
        {movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
        

        </div>
        

        </div>
  )
}

export default GeminiSuggestion
