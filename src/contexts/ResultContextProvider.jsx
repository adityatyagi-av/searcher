/* eslint-disable no-unused-vars */
const axios = require('axios');

import React, {createContext , useContext , useState} from 'react'

const ResultContext =createContext();

const baseUrl ='https://google-search74.p.rapidapi.com'


export function ResultContextProvider({children}) {
    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const[searchTerm,setSearchTerm]=useState('');


    //videos , //search //images

    const getResults =async(query)=>{
        setIsLoading(true);
        const response=await fetch(`${baseUrl}${query}`,{
            method: 'GET',
           

        });
        const data = await response.json();
        console.log(data)
        setResults(data);
        setIsLoading(false);
    }


  return (
    <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
        {children}
    </ResultContext.Provider>
  )
}



export const useResultContext = ()=> useContext(ResultContext);