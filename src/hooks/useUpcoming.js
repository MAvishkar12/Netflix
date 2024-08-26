import React from 'react'
import { useEffect } from "react";
import { Api_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from '../utils/movieSlice';

export default function useUpcoming() {
    const dispatch = useDispatch();

    useEffect(() => {
      getUpcomingMovie();
    }, []);
    const getUpcomingMovie = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          Api_Options
        );
        const json = await data.json();
      
        dispatch(addUpcomingMovie(json.results));
      };
}
