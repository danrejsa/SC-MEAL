import React, {Fragment} from 'react';
import { Grid, CircularProgress, Container } from "@material-ui/core";
//import useStyles from './styles';
import { useSelector } from 'react-redux';
import AddToolForm from './addTool/addTool';
import './addTools.css';
import { Table } from 'reactstrap';
//import '../toolStyle.css';

const AddTools = ({ setCurrentId })  => {


  

  //const classes = useStyles();
    const tools = useSelector((state) => state.tools); //posts from reducer's index.js
  
    return (
  !tools.length ? <CircularProgress/> :(
    <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {tools.map((tool) => (
         <Grid key={tool._id}  item xs={2} sm={4} md={4} spacing={3} >
         <AddToolForm tool={tool} setCurrentId={setCurrentId} />
         </Grid>
         ) )}
       
       </Grid >
       
   )
   
    )
    
    }; 

export default AddTools;
