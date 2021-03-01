import React,{useState} from 'react'
import {Link} from 'react-router-dom' 
import LoginPopup from './LoginPopup'


function Navbar() {
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
            <Link to ="/home" >Home </Link>
            <Link to ="/tvShows" >TvShows </Link>
            <Link to ="/movies" >Movies </Link>
            <Link to ="/explore" >Explore </Link>
            <Link to ="/liveTv" >LiveTv </Link>
            <Link to ="/kids" >Kids </Link>
        </ul>
        <ul className= "list-right">
            <button className = "button" 
            onClick = {handleLoginClick}>
            {loginPopupVisible && <LoginPopup />}      
            <Link to ="/login" >Login </Link>
            </button>
            <form>
                <label>serch</label>
                    <input type="text"/>               
            </form>
        </ul>
            
            
    </nav>
</>

)
}

export default Navbar
