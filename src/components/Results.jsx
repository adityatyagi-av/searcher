/* eslint-disable no-unused-vars */
import React ,{useEffect}from 'react';
import {useLocation} from 'react-router-dom';


import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {results ,isLoading , getResults ,searchTerm }=useResultContext();
  const location = useLocation(); //images,news,videos

  useEffect(()=>{
    getResults(`/${location.pathname}${searchTerm}`)
  },[searchTerm,location.pathname])
  
  if(isLoading) return <Loading/>;
  console.log(location.pathname)
  switch (location.pathname) {
    case '/search':
      return (
        
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?. results?.map(({ url, title,position }) => (
            <div key={position} className='md:w-2/5 w-full'>
              <a href={url} target='_blank' rel='noreferrer'>
                <p className="text-sm">
                  {url.length>30?url.substring(0.30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          )
          )}
        </div>
      );
      
  
    default:
      return "ERROR";
  }
}

export default Results
