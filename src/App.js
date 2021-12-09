import React, {useEffect, useState} from 'react';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistraion';
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import EmployeeHome from './components/EmployeeHome/EmployeeHome';
import OwnerHome from './components/OwnerHome/OwnerHome';
import axios from 'axios';





function App() {

  // Hooks

  const [jobList, setJobList] = useState("")
  const [userInfo, setUserInfo] = useState("")


  // Use Effects

  useEffect(() =>{
    getEmployeeJObs()
  },[])

  // API Calls

  

  const getEmployeeJObs = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get('http://127.0.0.1:8000/owners/employeeroles/', { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setJobList(response.data)
  }

  const addEmployeeWorkDay = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.post('http://127.0.0.1:8000/employees/addwork/', { headers: {Authorization: 'Bearer ' + jwt}})
  }

  // Log out 

  const logOut = ()=>{
    localStorage.removeItem("token");
    setUserInfo({})
    console.log("logged user out")
  }

  



  return (
    <div>   
        <NavBar logOutUser={logOut} />
        <Routes>
          <Route path="/" element= {<HomeScreen /> } />
          <Route path="/Registration" element= {<UserRegistration /> } />
          <Route path="/Login" element= {<UserLogin userData={setUserInfo}/> } />              
          <Route path="/Owner/Home" element = {<OwnerHome /> } />
          <Route path="/Employee/Home" element = {<EmployeeHome employeeJobs={jobList}/>} />
        </Routes>   
    </div>
  );
}

export default App;
