
import { Netflix_bg } from '../utils/constant'
import React from 'react'
import GptSearchBar from './GptSearchBar'
function GptSearch() {
  return (
    <div>
    <div className="absolute -z-10">
    <img src={Netflix_bg} alt="netflix-bg" />
 </div>
  <GptSearchBar/>
   
    </div>
   
  )
}

export default GptSearch
