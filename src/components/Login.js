import React, { useRef, useState } from "react";
import Header from "./Header";
import { Netflix_bg } from "../utils/constant";
import { checkValidteData } from "../utils/Validate";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [isSignform, setSignform] = useState(true);
  const [errorMassage, seterrMassage] = useState(null);
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitBtn = () => {
    const message = checkValidteData(
      email.current.value,
      password.current.value
    );

    seterrMassage(message);
    if (message) return;

    if (isSignform) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value  // new updated user information 
          }).then(() => {
            console.log(user);
          
            
          }).catch((error) => {
           seterrMassage(error.message)  // if error occur during login 
          
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMassage(errorCode + "" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMassage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="bg-cover bg-center min-h-screen sm:bg-auto md:bg-contain" src={Netflix_bg} alt="netflix-bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignform ? "Sign Up" : "Sign In"}
        </h1>
        {isSignform && (
          <input
          ref={name}
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
        <p
          className="py-4 cursor-pointer"
          onClick={() => {
            setSignform(!isSignform);
          }}
        >
          {isSignform
            ? "Already a registered ? Sign In Now "
            : "New to Netflix ? Sign Up Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
