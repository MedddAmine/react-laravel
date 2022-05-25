import 'react-bootstrap'
import 'react-router-dom'
import './App.css';
import { useHistory } from 'react-router-dom';
import React, {useState,useEffect} from 'react';
function Login() {
    useEffect(()=>{
        localStorage.clear()
    })

    const history=useHistory()

    
    return (
        <div>
            LOG out
        </div>
    )
}

export default Login