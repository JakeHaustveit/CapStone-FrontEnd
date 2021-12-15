import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "react-datetime/css/react-datetime.css"
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  
    <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  
  document.getElementById('root')
);


