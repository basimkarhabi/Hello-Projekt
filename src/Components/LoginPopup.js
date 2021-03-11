import React, {useState} from 'react'

function LoginPopup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('')

    function login (){
        console.log({email,password})
    }





    return (
        <div className="LoginPopup"> 
            <h2>Log In</h2>
            <form>
                    <input type="email" placeholder= "email" value= {email} 
                         onChange={e=>setEmail(e.target.value)} /> 
                    <br/>

                    <input type="password" placeholder= "password" value={password} 
                         onChange= {e=>setPassword(e.target.value)} /> 
                    <br/> 
                    <button className ="btn btn primary">login</button>  
           
            </form>
        </div>
    )
}

export default LoginPopup
