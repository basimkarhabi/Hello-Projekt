import React from 'react'

function SearchResult ({movieRes,loading}) {
    
    return (
           
        <div className="SearchResult">
             {loading && <p className="loading-text">loading....</p>}      
             {movieRes.map(item =>
                    <div className="movie-cards">
                        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt=""/>
                        <h3>{item.original_title}</h3>
                        <p>{item.overview}</p>
                        <p> Vote Count <span>{item.vote_count}</span></p>
                        <p>Vote Average <span>{item.vote_average}</span></p>
                        <p> Date <span>{item.release_date}</span></p>
                        <p> Popularity <span>{item.popularity}</span></p>
                    </div>
                    )}
        </div> 
    
    )
}

export default SearchResult
