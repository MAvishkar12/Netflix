import React from "react";
import { Form } from "react-router-dom";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Api_Options } from "../utils/constant";
import { addMovieName, addMovieResults } from "../utils/geminislice";
import { useDispatch } from "react-redux";
import { gemini_key } from "../utils/constant";
function GptSearchBar() {
  const langkey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  const dispatch = useDispatch();
  const key = gemini_key;
  // Gemini Logic here
  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
  const GEMINI_API_KEY = key;

  const apiKey = GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    safetySettings,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  // search movie in tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_Options
    );

    const json = await data.json(data);
    return json.results;
  };

  const user = useSelector((store) => store.user);
  const handleGptSearch = async () => {
    console.log(SearchText.current.value);

    if (!SearchText.current.value) return null;
    // gemini function here
    const query =
      "Act as a movie Recommendation System and Suggest Some movies for the query :" +
      SearchText.current.value +
      "Only give me name of 5 movies  , comma seprated like the example result give ahead .Example Result :Gadar Netflix,Sholy Amzaon Prime,Don Zee5,Golmal Hotstart,Koi mil Gaya Netflix remove \n   from result";
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage(query);
    if (!result) {
      <h1>Loading</h1>;
    }
    //console.log(result.response.text().replace(/\n/g, "").split(", "));
    const gptMovies = result.response.text().replace(/\n/g, "").split(", ");

    const promisearray = gptMovies.map(async (movie) => searchMovieTmdb(movie));
    if (promisearray === null) return <h1>Loadding</h1>;
    const tmdResults = await Promise.all(promisearray);
    console.log(tmdResults);

    dispatch(addMovieName(gptMovies));
    dispatch(addMovieResults(tmdResults));
  };

  return (
    <div className="pt-[36%] md:pt-[10%]  flex justify-center">
      <Form
        className=" w-full md:w-1/2  bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg shadow-inner shadow-[inset 0 0 10px 2px rgba(173,216,230,0.6)]"
          ref={SearchText}
          placeholder={lang[langkey].gptSearchText}
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 "
          onClick={handleGptSearch}
        >
          {lang[langkey].search}
        </button>
      </Form>
    </div>
  );
}

export default GptSearchBar;
