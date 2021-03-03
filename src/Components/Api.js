import React,{useState,useEffect} from 'react'

 const fetchMovies = async (searchMovie) => {
    const [data, setData]=useState([])

    const response = await 
    
      fetch('http://www.omdbapi.com/?s='+ searchMovie +'&apikey=480344f1&r=json')
        const result = await response.json()
          return result
   }

export default Api
