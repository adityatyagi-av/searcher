/* eslint-disable no-unused-vars */
import React ,{useEffect}from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

function Results() {

  const {results ,isLoading , getResults ,searchTerm }=useResultContext();
  const location = useLocation(); //images,news,videos

  useEffect(()=>{
    getResults('/search/q=Javascript Mastery')
  },[])
  
  if(isLoading) return <Loading/>;
  console.log(location.pathname)
  switch (location.pathname) {
    case '/search':
      return (
        console.log('hey')
        // <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
        //   {results?. results?.map(({ link, title }) => ()
        //   )}
        // </div>
      );
      case '/images':
        return 'Search'
      case '/news':
        return 'Search'
      case '/videos':
        return 'Search'
        
      
  
    default:
      return "ERROR";
  }
}

export default Results
