import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <div>
            <h2>Welcome To Student Attendance System</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
