import React,{useState} from 'react'
import {Link} from 'react-router-dom' 
import LoginPopup from './LoginPopup'
import Search from './Search'

function Navbar(props) {
    const [loginPopupVisible,setLoginPopupVisible] = useState(false)
   
    function handleLoginClick(){
        return(
        setLoginPopupVisible(!loginPopupVisible) 
        )
    }

    return (
<>
    <nav class="Navbar">
        <ul className="list-left">
            <Link to ="/home"   className="item">Home </Link>
            <Link to ="/tvShows"className="item" >TvShows </Link>
            <Link to ="/movies" className="item"  >Movies </Link>
            <Link to ="/explore"className="item" >Explore </Link>
            <Link to ="/liveTv" className="item" >LiveTv </Link>
            <Link to ="/kids"   className="item" >Kids </Link>
        </ul>

        <ul className= "list-right">
                <Search className="Search"
                        search  = {props.search}
                        setSearch ={props.setSearch} 
                        movieRes = {props.movieRes}
                    setmovieRes = {props.setmovieRes} />

                <button className = "button" 
                onClick = {handleLoginClick}>
                <Link to ="/login" >Login </Link>
                </button>

            {loginPopupVisible && <LoginPopup />}      

        </ul>   
    </nav>
</>

)
}

export default Navbar
