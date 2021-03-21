import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase'
// after creating a form, we need to get sort of a way to track what we have in our input field.Currently i have no way in the code to track that.Now what we do is that we go top of the file and we are going to use a state here.
function Login() {
    const history = useHistory()
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password) //  if it is a successfull then following code. otherwise catch..then follow.
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    // once we signed in,how do we keep tracking who actually signed in.Basically we will create a listener which tracks the user(who signed in).Now  in app js we use something called useEffect. //The next thing we do is how we pull user from state.// Now we deploy our App.

// (No refreshing in react). some fancy firebase login ....fancy firebase stuff happens here.
    const register= e => {
         e.preventDefault()
         // do some fancy firebase register.
         auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
            // it successfully created a new user with  email and password (go to the console and check the object)and eventually we created a user.Now we do naturally at this point is push then to the home page after they logged in.Now we pullup something usehistory from react dom and it allows us to programatically change the url.Now if authentication is not empty then we say in history of the browser that push the new page.
            // 
            console.log(auth)
            if (auth) {
                history.push('/')

            }
         })
         .catch(error=> alert(error.message))
}
    return (
        <div className='login'>
            <Link to = '/'>
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"  alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange= {e=> setEmail(e.target.value)}/> {/*we map the value email to the email state right there and then it connects with the two thing but we need to track when user types in. So everytime a user types in it triggers something called onchange.What it does is that gives us an event and we pair this even with an error function.e.target.value is essentially what the user typed in. As user types in, we are setting the email and it gets mapped through email*/}
                    <h5>Password</h5>
                    <input type='password' value={password} onChange= {e=>setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn}
                    className="login__signInButton"> Sign In
                    </button>

                </form>
                <p>
                    By signing-in you agree to the  Amazon's fake clone conditions of use and sales
                </p>
                <button onClick={register}
                 className="login__registerButton">
                      Create your Amazon account
                      </button>
            </div>
        </div>
    )
}

export default Login
