import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./home";
import Project from "./projects";
import Dashboard from "./dashboard";
import Indicator from "./indicator";
import Tool from "./tool";
import Impact from "./impact";
import Navbar from './Navbar/navbar';
import React, {Fragment} from 'react';
import Auth from "./auth/auth";

export default function RouterComponent() {
  return (
  
   <Fragment>

    <Routes className="App-route" >
      
    <Route className="App-sidebar"  exact path="/" element={<Sidebar />}>
      <Route className="link"  exact path="dashboard" element={<Dashboard />} />
      <Route className="link" exact  path="project" element={<Project />} />
      <Route className="link"  exact path="indicator" element={<Indicator />} />
      <Route className="link"  exact path="tools" element={<Tool />} />
      <Route className="link"  exact path="impact" element={<Impact/>} />
      <Route   path="auth" exact element={<Auth/>} />
   
    </Route>
  </Routes>
     </Fragment> 
  
  );
}