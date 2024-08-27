import React from "react";
import { useSelector } from "react-redux";
import VideoBacground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import lang from '../utils/languageConstant'

function MainContainer() {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  const langkey=useSelector(store=>store.config.lang)
  if (movie === null) return; // Early retun . intinally there is no movie ; if movies is null then return

  const mainmovie = movie[0]; // background movie

  const { id } = mainmovie;
  return (
    <div>
      <VideoTitle title={lang[langkey].movieTitle} overview={lang[langkey].movieText} />
      <VideoBacground  movieid={id}/>
    </div>
  );
}

export default MainContainer;
