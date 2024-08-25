import React from "react";
import { useSelector } from "react-redux";
import VideoBacground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movie === null) return; // Early retun . intinally there is no movie ; if movies is null then return

  const mainmovie = movie[0]; // background movie

  const { original_title, overview,id } = mainmovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBacground  movieid={id}/>
    </div>
  );
}

export default MainContainer;
