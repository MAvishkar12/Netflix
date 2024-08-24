import React, { useEffect } from 'react'
import Header from './Header'
import { Api_Options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';
function Browse() {
  const dispatch=useDispatch()

  useEffect(()=>{
    getNowPlayingMovie();
  },[])

  const getNowPlayingMovie= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',  Api_Options);
    const json= await data.json();
    console.log(json);
    dispatch(addNowPlayingMovie(json.results))
    
  }

  return (
    <div>
      <Header></Header>
     
    </div>
  )
}

export default Browse
