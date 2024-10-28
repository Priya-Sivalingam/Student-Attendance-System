import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './apiService';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function validateUsername(username) {
        const usernamePattern = /^\d{4}E\d{3}$/;
        return usernamePattern.test(username);
    }

    function validatePassword(password) {
        const passwordPattern = /^[a-z0-9]+$/;
        return passwordPattern.test(password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateUsername(username)) {
            setError('Invalid username format. Use YYYYEXXX.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must contain only lowercase letters and numbers.');
            return;
        }

        setError('');

        try {
            const data = await loginUser(username, password);
            localStorage.setItem('token', data.token);  // Save the token in local storage
            navigate('/home');  // Redirect to the home page on successful login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;