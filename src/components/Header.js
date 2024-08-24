import React from "react";
import { Netflix_logo } from "../utils/constant";
import { UserImg } from "../utils/constant";
import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
 

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }



  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img src={Netflix_logo} className="w-40" alt="logo"></img>
        {user &&   <div className="flex">
          <img className="w-7 h-7 my-5" src={UserImg}  alt="user-img"></img>
       
          <button onClick={handleSignOut} className="mx-2 my-4 bg-red-700 text-white px-1 py-1 h-10">{"Sign Out"}</button>
        </div>
     
      }
       </div>
      
    </>
  );
}

export default Header;
