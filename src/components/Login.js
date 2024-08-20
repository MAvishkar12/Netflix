import React, { useState } from "react";
import Header from "./Header";
import { Netflix_bg } from "../utils/constant";
function Login() {
  const [isSignform, setSignform] = useState(true);
  const toogleSignForm = () => {
    setSignform(!isSignform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Netflix_bg} alt="netflix-bg" />
      </div>
      <form className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignform ? "Sign Up" : "Sign In"}
        </h1>
        {isSignform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700 rounded-lg border border-[1] border-white"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg border border-[1] border-white"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg border border-[1] border-white"
        ></input>
        <button className="p-4 my-6  bg-red-700 w-full rounded-lg">
          {isSignform ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignForm}>
          {isSignform
            ? "New to Netflix ? Sign In Now"
            : "Already a registered ? Sign Up Now "}
        </p>
      </form>
    </div>
  );
}

export default Login;
