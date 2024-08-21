import React, { useRef, useState } from "react";
import Header from "./Header";
import { Netflix_bg } from "../utils/constant";
import { checkValidteData } from "../utils/Validate";
function Login() {
  const [isSignform, setSignform] = useState(true);
  const [errorMassage, seterrMassage] = useState(null);
  const toogleSignForm = () => {
    setSignform(!isSignform);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitBtn = () => {
    const message = checkValidteData(email.current.value,password.current.value,
    );
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);
    seterrMassage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Netflix_bg} alt="netflix-bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg border border-[1] border-white"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700 rounded-lg border border-[1] border-white"
        ></input>
        <p className="px-2 text-red-600 font-bold">{errorMassage}</p>
        <button
          className="p-4 my-6  bg-red-700 w-full rounded-lg"
          onClick={handleSubmitBtn}
        >
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
