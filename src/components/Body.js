import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../utils/userSlice';
function Body() {

      const dispatch=useDispatch();
      

    const appouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/> 
        },
        {
              path:"/browse",
              element:<Browse/> // after sign in user visit 
        }
    ])

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
         const {uid,email,displayName} = user.uid; 
         dispatch(addUser({uid:uid,email:email,displayName:displayName}))  // user sign in 
            
          } else {
            dispatch(removeuser()); // if user signout remove user
            
          }
        });
       
      },[])



  return (
    <div> 
      {/* */}
      
      <RouterProvider router={appouter}/>          
    </div>
  )
}

export default Body
