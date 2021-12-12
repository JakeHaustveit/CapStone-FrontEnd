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
import Calendar from './components/Calendar/Calendar';
import FullCalendar from '@fullcalendar/react' // must go before plugins







function App() {

  // Hooks

  const [employeeJobList, setEmployeeJobList] = useState("")
  const [userInfo, setUserInfo] = useState("")
  const [allEmployees, setAllEmployees] = useState("")
  const [allJobs, setAllJobs] = useState("")


  // Use Effects

  useEffect(() => (
    getEmployeeJobs(),
    getAllEmployees(),
    getAllJobs()
    
  ),[userInfo])


  //useEffect(() =>{
  //  
  //  getAllEmployees(),
  //},[])

  // API Calls

  //
  // For Owners
  //


 // Gets all jobs for employee
  const getEmployeeJobs = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get('http://127.0.0.1:8000/owners/employeeroles/', { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setEmployeeJobList(response.data)
  }


  //Gets all Employees
  const getAllEmployees = async () => {

    let response = await axios.get('http://127.0.0.1:8000/api/auth/employeelist/')
    setAllEmployees(response.data)
  }
  //Gets all jobs using business name
  const getAllJobs = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get("http://127.0.0.1:8000/owners/addJobs/" + + "/", { headers: {Authorization: 'Bearer ' + jwt}})
    setAllJobs(response.data)
  }



  //
  // for employees
  //

    // Lets employees add time card
    const addEmployeeWorkDay = async (data) => {

      const jwt = localStorage.getItem('token');
  
      let response = await axios.post(`http://127.0.0.1:8000/employees/addwork/${userInfo.business_name}/`, { headers: {Authorization: 'Bearer ' + jwt}})
    }


  // Log out 

  const logOut = ()=>{
    localStorage.removeItem("token");
    setUserInfo({})
    console.log("logged user out")
  }

  // For Calendar

  

  return (
    <div>   
        <NavBar logOutUser={logOut} />
        <Routes>
          <Route path="/Calendar" element={ <Calendar />} />        
          <Route path="/" element= {<HomeScreen /> } />
          <Route path="/Registration" element= {<UserRegistration /> } />
          <Route path="/Login" element= {<UserLogin userData={setUserInfo}/> } />              
          <Route path="/Owner/Home" element = {<OwnerHome loggedInUser={userInfo}    listOfEmployees={allEmployees}/> } />
          <Route path="/Employee/Home" element = {<EmployeeHome employeeJobs={employeeJobList} loggedInUser={userInfo} />} />
        </Routes>   
    </div>
  );
}

export default App;
