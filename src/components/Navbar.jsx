import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
{/* passing states as prop for applying dark */}
function Navbar({darkTheme, setDarkTheme}) {
  console.log(darkTheme)
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between  items-center border-b dark:border-gray-700 border-gray-200'>
    <div className="flex justify-between items-center space-x-5 w-screen"></div>
    
    
    {/* router setup */}
    <Link to="/">
      <p className="text-2xl bg-green-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
        Searcher🔍
      </p>
    </Link>
    <button type='button' onClick={()=> setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
      {darkTheme ?'💡': '🌙'}
      
    </button>
    <Search/>

    </div>
  )
}

export default Navbar
