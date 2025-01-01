import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import { AuthProvider, useAuth } from './context/AuthContext';
import Homepage from './pages/HomePage';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.user ? children : <Navigate to='/login'/>
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/' element={
              <ProtectedRoute>
                <Homepage/>
              </ProtectedRoute>
            }/>
          </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App