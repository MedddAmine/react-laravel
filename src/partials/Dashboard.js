import 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'react-router-dom'
import Header from './Header'
import Topnav from './Topnav'
import './App.css';
import Userfront from "@userfront/react";


function Dashboard() {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'Authorization':'bearer 21|BIvQSd4XKcdWudHnYem1wqNpREqt0E0gR1YxtMmy',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();

                setName(content.username);
            }
        )();
    });
    
    return (
        <div>

            <Header />
            <Topnav />

        </div>
    )
}
export default Dashboard