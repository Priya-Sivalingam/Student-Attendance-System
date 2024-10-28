import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        </Routes>
    );
}

export default App;
