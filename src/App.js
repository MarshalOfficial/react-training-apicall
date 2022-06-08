import React, { Component } from 'react';
import Navbar from './components/navbar';
import Users from './components/users';
//import { Route } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';
import User from './components/user';
import NotFound from './components/notFound';

class App extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route exact path='/user/:id' element={<User />} />
                    <Route exact path='/users' element={<Users />} />
                    <Route path='/' element={<Home />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route path='/NotFound' element={<NotFound />} />
                </Routes>
            </>
        );
    }
}

export default App;