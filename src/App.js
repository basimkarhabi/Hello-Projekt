import React ,{useState} from 'react';
import './App.css';
import Navbar  from './Components/Navbar'
import  Items from './Components/Items'
import Footer from './Components/Footer'
import  Login from './Components/Login'
import  Vip from './Components/Vip'
import  Search from './Components/Search'
import {Route} from 'react-router-dom' 
import Home from './Components/Home'
import TvShows from './Components/TvShows'
import Movies from './Components/Movies'
import Explore from './Components/Explore'
import LiveTv from './Components/LiveTv'
import Kids from './Components/Kids'
import LoginPopup from './Components/LoginPopup'


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <ul>

            <Navbar />
            <Route path="/home"     exact>  <Home />    </Route>
            <Route path="/tvShows"  exact>  <TvShows /> </Route>
            <Route path="/movies"   exact>  <Movies />  </Route>
            <Route path="/explore"  exact>  <Explore /> </Route>
            <Route path="/liveTv"   exact>  <LiveTv />  </Route>
            <Route path="/kids"     exact>  <Kids />    </Route>
            <Route path="/login"    exact>     </Route>
          <h1>Test the First APP</h1>
            <Items/>
            <Footer/>
            <Vip />
            <Search />
           
            <div>
            </div>
           

        </ul>
       
      </header>
    </div>
  );
}

export default App;
