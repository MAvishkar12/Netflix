import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

function VideoBackground({ movieid }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieid);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen mt-0 aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
