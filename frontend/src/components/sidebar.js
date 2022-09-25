import React, {Fragment, useState} from 'react'
import '../index.css';
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RouterComponent from "./router";
import { Outlet, Link } from "react-router-dom";
import Project from "./projects";
import Dashboard from "./dashboard";
import Home from "./home";
import Navbar from './Navbar/navbar';

const Sidebar = () => { 

    
  
  return (
   
    <>
   
        <nav className='sidebar' >
   
       <ul className="sidebarList">
   <Link to='home' className="row">
        <div id="icon"><HomeIcon/></div>
       <div id="title">Home</div>
   </Link>
   <Link to='dashboard' className="row">
        <div id="icon"><DashboardIcon/></div>
       <div id="title">Dashboard</div>
   </Link>
   <Link to='projects' className="row">
        <div id="icon"><CreditCardIcon/></div>
       <div id="title">Projects</div>
   </Link>

   <Link to='indicators' className="row">
        <div id="icon"><DragIndicatorIcon/></div>
       <div id="title">Indicator</div>
   </Link>
   <Link to='tools' className="row">
        <div id="icon"><HomeRepairServiceIcon/></div>
       <div id="title">Tools</div>
   </Link>
   <Link to='impact' className="row">
        <div id="icon"><AssessmentIcon/></div>
       <div id="title">Success Stories</div>
   </Link>
   
</ul>

   </nav>

   <Outlet/>
 </>
)}

export default Sidebar;