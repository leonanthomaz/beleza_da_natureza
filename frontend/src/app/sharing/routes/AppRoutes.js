import React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { AuthProvider } from '../context/auth'

import { 
        BrowserRouter as Router, 
        Routes, 
        Route, 
        Navigate 
} from 'react-router-dom';

import { Home } from '../../pages/Home'
import { Cart } from '../../pages/Cart'
import { Categories } from '../../pages/Categories';
import { Checkout } from '../../pages/Checkout';
import { Login } from '../../pages/Login';
import { MyAccount } from '../../pages/MyAccount';
import { Register } from '../../pages/Register';


export const AppRouter = () => { 
    const { user } = useContext(AuthContext)
    
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/cart' element={ <Cart />}/>
                    <Route path='/categories/:id' element={<Categories/>}/>
                    <Route path='/login' element={user ? <Navigate to="/" /> : <Login />}/>
                    <Route path='/register' element={user ? <Navigate to="/" /> : <Register />}/>
                    <Route path='/checkout' element={!user ? <Navigate to="/login" /> : <Checkout />}/>
                    <Route path='/myaccount' element={!user ? <Navigate to="/" /> : <MyAccount />}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}