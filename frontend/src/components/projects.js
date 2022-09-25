import "../index.css";
import React, { useEffect, useState, Fragment } from "react";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { getProjects } from '../actions/projects';
import { useSelector } from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid, RootRef, Paper} from "@material-ui/core";
import AddProjects from './addProjects/addProjects';
//import sconlogo from "./assets/sconlogo.png";
import useStyles from '../styles';
import AddProjectForm from "./form/form";
import './toolStyle.css';
import Paginate from './pagination.jsx';


const Project = () => {
    
 
const classes = useStyles();
const [currentId, setCurrentId] = useState(null)
const dispatch = useDispatch()

useEffect( () => {
    dispatch( getProjects())
}, [dispatch])

const section = {
    height: "50px",
    paddingTop: 5,
    backgroundColor: "red"
  };
        return (
              <Container maxidth="lg">
                      <AppBar className={classes.appBar} position="static" color="inherit">
                          <Typography className={classes.heading} variant="h5" align="center">STREET CHILD PROJECTS</Typography>
                    
                      </AppBar>
                          <Grow in>
                              <Container >
                                  <Grid container justify="space-between" alignItems="stretch" spacing={1} >
                                  <Grid item xs={12} sm={4}>
                                          <AddProjectForm currentId={currentId} setCurrentId= {setCurrentId}/>
                                      </Grid>
                                      <Grid container >
                                          <AddProjects setCurrentId= {setCurrentId}   />
                                      <Paper className={classes.pagination} elevation={6}>
                                        <Paginate />
                                      </Paper>
                                      </Grid>
                                     
                                  </Grid>
                              </Container>
                          </Grow>
              </Container>
        )}
       
export default Project
