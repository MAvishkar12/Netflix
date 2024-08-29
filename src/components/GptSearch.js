import { Netflix_bg } from "../utils/constant";
import React from "react";
import GptSearchBar from "./GptSearchBar";
import GeminiSuggestion from "./GeminiSuggestion";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Netflix_bg} alt="netflix-bg" />
      </div>
      <GptSearchBar />
      <GeminiSuggestion/>
     
    </div>
  );
}

export default GptSearch;
