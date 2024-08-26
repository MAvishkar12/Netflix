import React from 'react'
import { Poster_url } from '../utils/constant'

function MovieCard({posterpath}) {
  return (
    <div className='w-44 pr-4'>
      <img src={Poster_url+posterpath} alt='Poster'/>  
    </div>
  )
}

export default MovieCard