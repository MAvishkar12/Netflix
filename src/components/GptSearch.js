import { Netflix_bg } from "../utils/constant";
import React from "react";
import GptSearchBar from "./GptSearchBar";
import GeminiSuggestion from "./GeminiSuggestion";

function GptSearch() {
  return (
    <>
    <div className=" fixed -z-10 ">
    <img  className="bg-cover bg-center min-h-screen sm:bg-auto md:bg-contain"src={Netflix_bg} alt="netflix-bg" />
  </div>
    <div className="">
    
      <GptSearchBar />
      <GeminiSuggestion/>
     
    </div>
    </>
  );
}

export default GptSearch;
