import React, {Fragment} from 'react';
import { Grid, CircularProgress, Container } from "@material-ui/core";
//import useStyles from './styles';
import { useSelector } from 'react-redux';
import AddIndicatorForm from './addIndicator/addIndicator';
//import './addIndicators.css';
import { Table } from 'reactstrap';
import '../toolStyle.css';

const AddIndicators = ({ setCurrentId })  => {
  
//const classes = useStyles();
const indicators = useSelector((state) => state.indicators); //posts from reducer's index.js
  
return (
!indicators.length ? <CircularProgress/> :(
    <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {indicators.map((indicator) => (
         <Grid key={indicator._id}  item xs={2} sm={4} md={4} spacing={3} >
         <AddIndicatorForm indicator={indicator} setCurrentId={setCurrentId} />
         </Grid>
         ) )}
       
       </Grid >
       
   )
   
    )
    
    }; 

export default AddIndicators;
