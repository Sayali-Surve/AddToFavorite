import './App.css';
import React from 'react';
import LoginForm from './LoginForm';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import { Button } from '@mui/material';
import UserSignUp from './UserSignUp';

function App(props) {
  const Home = () => {
    return (
      <>
        <div>
          <h3> Hi Welcome!</h3>
        </div>
        <div>
          <Link to="/home" style={{ textDecoration: "none", marginLeft: "50px" }}>
            <Button variant="h6" >
              Login
            </Button>
          </Link>
          <h3>New User? Please sign up</h3>
          <Link to="/signup" style={{ textDecoration: "none", marginLeft: "50px" }}>
            <Button variant="h6">
              Sign Up
            </Button>
          </Link>
        </div>
      </>
    );
  }
  return (

    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<LoginForm />} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Dashboard />} />
            <Route path="/favorites" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;