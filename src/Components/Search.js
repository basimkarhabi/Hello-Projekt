import React from 'react'

function Search({search, setSearch, movieRes,setmovieRes}) {
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
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a0a7e40dc8162ed7e37aa2fc97db5654&language=en-US&query=${term}`)
        let data = await response.json();
        setmovieRes(data.results)
    console.log(data)
    } 

    return (
        <div className="movie">
            <form onSubmit={onFormSubmit}>
                <input onChange={searchHandler} type="text"name ="search"  />  
             </form>
        </div>
    )
}

export default Search;




