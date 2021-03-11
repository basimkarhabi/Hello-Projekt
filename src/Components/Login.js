import React,{useState} from 'react'

function Login() {
    const[user,setuser]=useState("basem")
    const username={user}

    return (
        <div>
            {true ? <div>
            bbb@see.com
                <button className = "btn btn-danger btn-sm">Logout</button>
                </div> : ' you need to login'
                
                }
        </div>
    )
}

export default Login
