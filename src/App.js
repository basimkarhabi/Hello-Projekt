import React ,{useState } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Navbar  from './Components/Navbar'
import  Items from './Components/Items'
import Footer from './Components/Footer'
import  Login from './Components/Login'
import  Vip from './Components/Vip'
import  Search from './Components/Search'
import LoginPopup from './Components/LoginPopup'
import logo from './Components/logo.svg'
import SearchResult from './Components/SearchReasult';


function App() {
  const [search, setSearch] = useState("");
  const [movieRes, setmovieRes] = useState([]);

 

  return ( 
      <div className="AppList">
                  <ul className = "Head navbar navbar-dark bg-" id= "ulNavbar">
                        <img src="logo192.png"  width= "55" alt= "logo" id="img"/>
                  <Navbar 
                        search  = {search}
                        setSearch ={setSearch} 
                        movieRes = {movieRes}
                        setmovieRes = {setmovieRes}/>

                  <Route path="/login" >  <Login/>  </Route> 
                  <Vip />
                  </ul>
                  <Items movieRes={movieRes} g />
                  <Footer/>
      </div>
      );
}

export default App;
