import 'react-bootstrap'
import 'react-router-dom'
import './App.css';
import { useHistory } from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
function Login() {
    
    const [username, setName]= useState("")
    const [password, setPassword]= useState("")
    const [redirect, setRedirect]= useState(false)
    

    async function signUp(e){
        let item={username,password}
        console.warn(item);
        e.preventDefault();
        let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            credentials: 'include',
            body:JSON.stringify(item)
        });
        console.warn(result.json());
        setRedirect(true);
        

    }
    if(redirect){
        return <Redirect to='/'/>
    }
    return (
        <div>
            <h1>
                Login Page
            </h1>
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br /> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={signUp}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" value={username} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                </div>
                                <button type='submit' className="btn btn-black">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login