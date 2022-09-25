import React, {Fragment} from 'react';
import { Grid, CircularProgress } from "@material-ui/core";
//import useStyles from './styles';
import { useSelector } from 'react-redux';
import AddProjectForm from './addProject/addProject';
import '../toolStyle.css';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

const AddProjects = ({ setCurrentId })  => {

  //const classes = useStyles();
    const projects = useSelector((state) => state.projects); //posts from reducer's index.js
   
    return (
   !projects.length ? <CircularProgress/> :(
    <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {projects.map((project) => (
         <Grid key={project._id}  item xs={2} sm={4} md={4} spacing={3} >
         <AddProjectForm project={project} setCurrentId={setCurrentId} />
         </Grid>
         ) )}
       
       </Grid >
   )
    )}; 

export default AddProjects;
