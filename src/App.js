import React, { useState, useEffect } from 'react';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistraion';
import {Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import OwnerAndEmployeeRouting from './components/OwnerAndEmployeeRouting/OwnerAndEmployeeRouting';
import OwnerLogin from './components/OwnerLogin/OwnerLogin';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';



function App() {
  return (
    <div>   
        <NavBar />
        <Routes>
          <Route path="/" element= {<HomeScreen /> } />
          <Route path="/Registration" element= {<UserRegistration /> } />
          <Route path="/Login" element= {<UserLogin /> } />
          <Route path="/RegisterRole" element ={<OwnerAndEmployeeRouting />} />
          <Route path="/OwnerRegistration" element = {<OwnerLogin /> } />
          <Route path="/EmployeeRegistration" element = {<EmployeeLogin />} />
        </Routes>   
    </div>
  );
}

export default App;
