import React from 'react'
import { Form } from 'react-router-dom'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

function GptSearchBar() {
    const langkey=useSelector(store=>store.config.lang)
    
    
  return (
    <div className='pt-[8%]  flex justify-center'>
        <Form className='w-1/2  bg-black grid grid-cols-12 '>
      <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[langkey].gptSearchText}></input>
      <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">{lang[langkey].search}</button>
        </Form>
    </div>
  )
}

export default GptSearchBar