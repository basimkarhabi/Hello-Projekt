import React,{useState} from 'react'
import {Link} from 'react-router-dom' 
import LoginPopup from './LoginPopup'


function Navbar() {

    const [loginPopupVisible,setLoginPopupVisible] = useState(false)

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                 <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo is her</a>
                        <button className="navbar-toggler" 
                            type="button"        
                            data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"        id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to ="/home" >Home </Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/tvShows" >TvShows </Link>
                                </li>
                                <li className="nav-item">
                                       <Link to ="/movies" >Movies </Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/explore" >Explore </Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/liveTv" >LiveTv </Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/kids" >Kids </Link>
                                </li>
                                <li>
                                
                                <button onClick = {()=>setLoginPopupVisible(!loginPopupVisible)}>
                                {loginPopupVisible && <LoginPopup/>  }      
                                        <Link to ="/login" >Login </Link>

                                </button>
                                </li>
                            </ul>

                                
    </div>
  </div>
</nav>
         

        </div>
    )
}

export default Navbar
