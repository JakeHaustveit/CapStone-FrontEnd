import React, {useEffect, useState} from 'react';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistraion';
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import OwnerAndEmployeeRouting from './components/OwnerAndEmployeeRouting/OwnerAndEmployeeRouting';
import OwnerRegister from './components/OwnerRegister/OwnerRegister';
import EmployeeRegister from './components/EmployeeRegister/EmployeeRegister';
import OwnerLogin from './components/OwnerLogin/OwnerLogin';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';
import EmployeeHome from './components/EmployeeHome/EmployeeHome';
import OwnerHome from './components/OwnerHome/OwnerHome';
import axios from 'axios';





function App() {

  // Hooks

  const [jobList, setJobList] = useState("")
  const [userId, setUserId] = useState("")


  // Use Effects

  useEffect(() =>{
    getEmployeeJObs()
  },[jobList])

  // API Calls

  

  const getEmployeeJObs = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get('http://127.0.0.1:8000/owners/employeeroles/', { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setJobList(response.data)
  }



  return (
    <div>   
        <NavBar />
        <Routes>
          <Route path="/" element= {<HomeScreen /> } />
          <Route path="/Registration" element= {<UserRegistration /> } />
          <Route path="/Login" element= {<UserLogin /> } />
          <Route path="/RegisterRole" element ={<OwnerAndEmployeeRouting />} />
          <Route path="/Owner/Registration" element = {<OwnerRegister /> } />
          <Route path="/Employee/Registration" element = {<EmployeeRegister employeeJobs={jobList}/>} />
          <Route path="/Owner/Login" element = {<OwnerLogin /> } />
          <Route path="/Employee/Login" element = {<EmployeeLogin />} />
          <Route path="/Owner/Home" element = {<OwnerHome /> } />
          <Route path="/Employee/Home" element = {<EmployeeHome employeeJobs={jobList}/>} />
        </Routes>   
    </div>
  );
}

export default App;
