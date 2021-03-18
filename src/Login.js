import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"
function Login() {
    return (
        <div className='login'>
            <Link to = '/'>
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"  alt=""/>
            </Link>
        </div>
    )
}

export default Login
