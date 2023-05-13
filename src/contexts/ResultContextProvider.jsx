/* eslint-disable no-unused-vars */
import axios from "axios";

import React, {createContext , useContext , useState} from 'react'

const ResultContext =createContext();

const baseUrl ='https://google-search74.p.rapidapi.com'


export function ResultContextProvider({children}) {
    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const[searchTerm,setSearchTerm]=useState('');


    //videos , //search //images

    const getResults =async(text)=>{
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: baseUrl,
            params: {
              query: text,
              limit: '10',
              related_keywords: 'true'
            },
            headers: {
              'X-RapidAPI-Key': '5f9f85694cmsh0d34eabc53a4794p194d9ejsn89c8305af55c',
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
          };
          const response =await axios.request(options)
        const data = await response.data;
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