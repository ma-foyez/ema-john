import React, { useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFreamwork, handleGoogleSignIn, handleSignOut, handleFbLogin, createUserWithEmailPassword, signInWithEmailPassword } from './LoginManager'

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        photo: "",
        email: "",
    })

    initializeLoginFreamwork();

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // handle google sign input
    const GoogleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    // handle singout
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    }
    // sign in with facebook
    const fbSignIn = () => {
        handleFbLogin()
            .then(res => {
                handleResponse(res, true)
            })
    }
    // handle change input
    const handleInput = (event) => {
        let isformValid = true;
        if (event.target.name === "email") {
            isformValid = (/\S+@\S+\.\S+/).test(event.target.value);
        }
        if (event.target.name === "password") {
            const passLength = event.target.value.length > 8;
            const passWord = /\d{1}/.test(event.target.value);
            isformValid = passLength && passWord;
        }
        if (isformValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {

            createUserWithEmailPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)

                })

        }
        if (!newUser && user.email && user.password) {
            signInWithEmailPassword(user.email, user.password)
                .then(res => {
                   handleResponse(res, true)
                })
        }
        e.preventDefault();
    }

    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from)
        }
    }
    return (
        <div className="Login">
            {
                user.isSignIn && <div>
                    <img src={user.photo} alt="" />
                    <h2>Welcome, {user.name}</h2>
                    <p>Your current email is : {user.email}</p>

                </div>
            }
            {
                user.isSignIn ? <button onClick={signOut}> Sign Out</button> : <button onClick={GoogleSignIn}> Sign In</button>

            } <br /> <br />
            <button onClick={fbSignIn}>Sing up with facebook</button>
            <br /> <br />
            <form>
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
                <label htmlFor=""> Create an account</label> <br />
                {
                    newUser && <div>
                        <input type="text" onBlur={handleInput} name="name" id="" placeholder="Enter your name" /> <br />
                        <input type="number" onBlur={handleInput} name="phone" id="" placeholder="Enter your phone" />
                    </div>

                }
                <input type="email" onBlur={handleInput} name="email" id="" placeholder="Enter your email" required /> <br />
                <input type="password" onBlur={handleInput} name="password" id="" placeholder="Enter your password" required /> <br />
                <input type="submit" onClick={handleSubmit} value={newUser ? 'Sign up' : 'Login'} />
            </form>
            <p>{user.error}</p>
            <p> {user.name}</p>
            {
                user.success && <p>{newUser ? "Registration" : "loged in"} successfully</p>
            }
        </div>
    );
}
export default Login;