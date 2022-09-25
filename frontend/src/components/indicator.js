import "../index.css";
import React, { useEffect, useState, Fragment } from "react";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { getIndicators } from '../actions/indicators';
import { useSelector } from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid, RootRef} from "@material-ui/core";
import AddIndicators from './addIndicators/addIndicators';
import useStyles from '../styles';
import AddIndicatorForm from "./form/addIndicatorForm";
import './toolStyle.css'

const Indicator = () => {
 
const classes = useStyles();
const [currentId, setCurrentId] = useState(null)
const dispatch = useDispatch()
useEffect( () => {dispatch( getIndicators())}, [dispatch])
 
 

        return (
              <Container maxidth="lg">
                      <AppBar className={classes.appBar} position="static" color="inherit">
                          <Typography className={classes.heading} variant="h5" align="center">Project Indicators</Typography>
                    
                      </AppBar>
                          <Grow in>
                              <Container>
                                  <Grid container maxWidth="lg"  justify="space-between"alignItems="stretch" spacing={3} >
                                    
                                      <Grid item xs={12} sm={4} >
                                          <AddIndicatorForm currentId={currentId} setCurrentId= {setCurrentId}/>
                                      </Grid>
                                      <Grid >
                                          <AddIndicators setCurrentId= {setCurrentId} />
                                      </Grid>
                                      
                                  </Grid>
                              </Container>
                          </Grow>
              </Container>
        )}
       
export default Indicator;
