import React,{useState, useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid, RootRef,Button , Avatar, Toolbar} from "@material-ui/core";
import useStyles from './styles';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom'

function Navbar() {

const navigate = useNavigate();
const dispatch = useDispatch();
const location = useLocation();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const classes = useStyles();
  
const logout = () => {
    dispatch({type:'LOGOUT'})
    navigate.push('/')
    setUser(null);
};
   

useEffect(() => {
     const token = user?.token;

      setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])


    return (
        <>
    
             <AppBar className={classes.appBar} position="static" color="#FBA536">
    <div className={classes.brandContainer}>
     <Typography component ={Link} to="/" className={classes.heading} variant="h3" align="center">SCoN MEAL Dashboard</Typography>
                    
     </div>
     
        <Toolbar className={classes.toolbar}>
        {user ? (
                <div className={classes.profile}>
                    
            <Button variant='contained' className={classes.logout} color='secondary'
            onClick={logout}
            >Logout</Button>
                </div>
            ):  (
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
            )}
        </Toolbar>
        </AppBar>
    </>
    )}

export default Navbar
