import React, { useEffect, useState, Fragment } from "react";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getProjects } from './actions/projects';
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import RouterComponent from "./components/router";
import './assets/css/material-dashboard.css';
import './assets/css/material-dashboard.css.map';
import './assets/css/material-dashboard.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/fonts/nucleo-icons.eot';
import './assets/fonts/nucleo-icons.svg';
import './assets/fonts/nucleo-icons.ttf';
import './assets/fonts/nucleo-icons.woff';
import './assets/fonts/nucleo-icons.woff2';
import './assets/fonts/nucleo.eot';
import './assets/fonts/nucleo.ttf';
import './assets/fonts/nucleo.woff';
import './assets/fonts/nucleo.woff2';
import './assets/img/icons/flags/AU.png';
import './assets/img/icons/flags/BR.png';
import './assets/img/icons/flags/DE.png';
import './assets/img/icons/flags/GB.png';
import './assets/img/icons/flags/US.png';
import './assets/img/illustrations/chat.png';
import './assets/img/illustrations/dark-lock-ill.png';
import './assets/img/illustrations/danger-chat-ill.png';
import './assets/img/illustrations/lock.png';
import './assets/img/illustrations/illustration-reset.jpg';
import './assets/img/illustrations/illustration-lock.jpg';
import './assets/img/illustrations/illustration-signin.jpg';
import './assets/img/illustrations/illustration-signup.jpg';
import './assets/img/illustrations/illustration-verification.jpg';
import './assets/img/logos/gray-logos/logo-coinbase.svg';
import './assets/img/logos/gray-logos/logo-nasa.svg';
import './assets/img/logos/gray-logos/logo-netflix.svg';
import './assets/img/favicon.png';
import './assets/img/down-arrow.svg';
import './assets/img/down-arrow-white.svg';
import './assets/css/material-dashboard.css';
import './assets/css/material-dashboard.css.map';
import './assets/css/material-dashboard.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/fonts/nucleo-icons.eot';
import './assets/fonts/nucleo-icons.svg';
import './assets/fonts/nucleo-icons.ttf';
import './assets/fonts/nucleo-icons.woff';
import './assets/fonts/nucleo-icons.woff2';
import './assets/fonts/nucleo.eot';
import './assets/fonts/nucleo.ttf';
import './assets/fonts/nucleo.woff';
import './assets/fonts/nucleo.woff2';
import './assets/img/icons/flags/AU.png';
import './assets/img/icons/flags/BR.png';
import './assets/img/icons/flags/DE.png';
import './assets/img/icons/flags/GB.png';
import './assets/img/icons/flags/US.png';
import './assets/img/illustrations/chat.png';
import './assets/img/illustrations/dark-lock-ill.png';
import './assets/img/illustrations/danger-chat-ill.png';
import './assets/img/illustrations/lock.png';
import './assets/img/illustrations/illustration-reset.jpg';
import './assets/img/illustrations/illustration-lock.jpg';
import './assets/img/illustrations/illustration-signin.jpg';
import './assets/img/illustrations/illustration-signup.jpg';
import './assets/img/illustrations/illustration-verification.jpg';
import './assets/img/logos/gray-logos/logo-coinbase.svg';
import './assets/img/logos/gray-logos/logo-nasa.svg';
import './assets/img/logos/gray-logos/logo-netflix.svg';
import './assets/img/favicon.png';
import './assets/img/down-arrow.svg';
import './assets/img/down-arrow-white.svg';
import Navbar from './components/Navbar/navbar';
import Auth from "./components/auth/auth";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Project from "./components/projects";
import Indicator from "./components/indicator";
import Tool from "./components/tool";
import Impact from "./components/impact";
import Home from "./components/home";


const App = () => {
    
    return ( 
 
  <BrowserRouter >
 
  <div className="App" >
  <Routes className="App-route">
        <Route path="auth"  exact  element={<Auth/>} />
        <Route className="App-sidebar"  path="/"  exact element={<Sidebar/>}>
        <Route className="link"  path="home" exact element={<Home/>} />
        <Route className="link"  path="dashboard"  exact element={<Dashboard />} />
        <Route className="link"  path="projects" exact  element={<Project/>} />
        <Route className="link"  path="indicators" exact  element={<Indicator />} />
        <Route className="link"  path="tools"  exact element={<Tool/>} />
        <Route className="link"  path="impact" exact element={<Impact/>} />
      </Route>
    </Routes>
</div>
 </BrowserRouter>
  
    )
}

export default App;