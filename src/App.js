import React ,{useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Navbar  from './Components/Navbar'
import  Items from './Components/Items'
import Footer from './Components/Footer'
import  Login from './Components/Login'
import  Vip from './Components/Vip'
import  Search from './Components/Search'
import Home from './Components/Home'
import TvShows from './Components/TvShows'
import Movies from './Components/Movies'
import Explore from './Components/Explore'
import LiveTv from './Components/LiveTv'
import Kids from './Components/Kids'
import LoginPopup from './Components/LoginPopup'
import logo from './Components/logo.svg'

function App() {


  return (
<div className="AppList">
      <ul className = "Head navbar navbar-dark bg-primary ">
        <img src="logo192.png"  width= "60" alt= "logo"/>
          <Navbar />
          <Route path="/home"     exact>  <Home />    </Route>
          <Route path="/tvShows"  exact>  <TvShows /> </Route>
          <Route path="/movies"   exact to = "/movies">  <Movies />  </Route>
          <Route path="/explore"  exact>  <Explore /> </Route>
          <Route path="/liveTv"   exact>  <LiveTv />  </Route>
          <Route path="/kids"     exact>  <Kids />    </Route>
          <Route path="/login"   >   <Login/>  </Route>
      </ul>

          <h1>Test the First APP</h1>
          <Items/>
          <Footer/>
          <Vip />
          <Search />

      

</div>
  );
}

export default App;
