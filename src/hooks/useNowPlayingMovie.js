import { useEffect } from "react";
import { Api_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
// Custom hook / user defined hook 
// hook is nothing but Js function return some Jsx similar code
const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );
    const json = await data.json();
  
    dispatch(addNowPlayingMovie(json.results));
  };
};

export default useNowPlayingMovie;
