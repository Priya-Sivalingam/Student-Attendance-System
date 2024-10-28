import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <Switch>
            <Route path="/login" render={() => (isLoggedIn ? <Redirect to="/home" /> : <Login />)} />
            <Route path="/home" render={() => (isLoggedIn ? <Home /> : <Redirect to="/login" />)} />
            <Redirect from="/" to="/login" />
        </Switch>
    );
};

export default App;
