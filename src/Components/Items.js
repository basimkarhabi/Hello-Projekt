import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import TvShows from './TvShows'
import Movies from './Movies'
import Explore from './Explore'
import LiveTv from './LiveTv'
import Kids from './Kids'
import SearchResult from './SearchReasult'


function Items({movieRes}) {
    return (
        <div className = 'Items'>
           <Route path="/home"     exact>  <Home />    </Route>
                  <Route path="/tvShows"  exact>  <TvShows /> </Route>
                  <Route path="/movies"   exact>  <Movies />  </Route>
                  <Route path="/explore"  exact>  <Explore /> </Route>
                  <Route path="/liveTv"   exact>  <LiveTv />  </Route>
                  <Route path="/kids"     exact>  <Kids />    </Route>
                  <Route path="/search"     exact>  <SearchResult movieRes={movieRes}/>   </Route>
        </div>
    )
}

export default Items
