import React , {useState} from 'react'
import {useHistory}  from 'react-router-dom'
import axios from 'axios'

function Search({search, setSearch, movieRes,setmovieRes}) {
    const [loading,setLoading]= useState(true)
    const history = useHistory()
    console.log(search)

    const searchHandler = (e)=>{
        setSearch(e.target.value)
    } 

   const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(search)
      }
  
      const onSearchSubmit = (term) => {  
        getMovie(term)
    }

    const getMovie = async (term) => {
        history.push('/search')
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a0a7e40dc8162ed7e37aa2fc97db5654&language=en-US&query=${term}`)
        let data = await response.json();
        setLoading(false)
        setmovieRes(data.results)
         console.log(data)
    } 

    return (
        <div className="search">
            <form onSubmit={onFormSubmit}>
                <input onChange={searchHandler} type="text"name ="search"  className="SearchInput"  placeholder="Search"/>  
             </form>
            {loading && <p className="loading-text">loading....</p>}      
        </div>
    )
}

export default Search;




