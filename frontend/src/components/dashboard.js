import '../index.css';
import React, { useEffect, useState, Fragment } from "react";
import ChartEducation from "./chartsEducation";
import ChartProtection from "./chartProtection";
import ChartLivelihood from "./chartLivelihood";
//import { UserData } from "./userData";
import BoyTwoToneIcon from '@mui/icons-material/BoyTwoTone';
import GirlTwoToneIcon from '@mui/icons-material/GirlTwoTone';
import ManTwoToneIcon from '@mui/icons-material/ManTwoTone';
import WomanTwoToneIcon from '@mui/icons-material/WomanTwoTone';
import BlindTwoToneIcon from '@mui/icons-material/BlindTwoTone';
import AccessibleForwardTwoToneIcon from '@mui/icons-material/AccessibleForwardTwoTone';
import {Chart as ChartJS} from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Container, AppBar, Typography, Grow, Grid, RootRef} from "@material-ui/core";
import axios from 'axios';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
//import sconlogo from "./assets/sconlogo.png";
import useStyles from '../styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddDashboardData from "./form/addDashboardData";
import { getIndicators } from '../actions/indicators';


function Dashboard() {
  //const [educationData,setEducationData] = ([]);
  //const [chartData, setChartData] = useState({});
//const [userData, setUserData] = useState[[]];
const classes = useStyles();
//useEffect( () => {
  //  dispatch( getIndicators())
//}, [dispatch])
//const [currentId, setCurrentId] = useState(null)
//const dispatch = useDispatch()
//useEffect( () => {dispatch( getTools())}, [dispatch])

const indicators = useSelector((state) => state.indicators);
// const total=(indicators.reduce((total,currentItem) =>  
  //    total = total + currentItem.protectionGirlsReached,0));

return (
    <>   

     <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
     <Typography className={classes.heading} variant="h6" align="center">MEAL GLOBAL DASHBOARD</Typography>
                    
   </AppBar>
    <Grow in>
   <div class="container-fluid py-3">
     <div class="row">
        <div class="col-xl-2 col-sm-6 mb-l-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
              <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0"># of Boys Reached</p>
               
                <h4 class="mb-0">N 2,350</h4>
                <BoyTwoToneIcon  fontSize='large'/>
              </div>
             
            </div>
       
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
         
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0"># of Girls Reached</p>
                <h4 class="mb-0">2,300</h4>
                <GirlTwoToneIcon fontSize="large"/>
              </div>
            </div>
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
         
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-success shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0"># of Men Reached</p>
                <h4 class="mb-0">2,300</h4>
                <ManTwoToneIcon fontSize="large"/>
              </div>
            </div>
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
         
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-danger shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0"># of Women Reached</p>
                <h4 class="mb-0">3,462</h4>
                <WomanTwoToneIcon fontSize="large"/>
              </div>
            </div>
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
         
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-secondary shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt">
                <p class="text-sm mb-0"># of PWD Reached</p>
                <h4 class="mb-0">3,462</h4>
                <AccessibleForwardTwoToneIcon fontSize="large"/>
              </div>
            </div>
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
         
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">weekend</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Overall Reached</p>
                <h4 class="mb-0">103,430</h4>
              </div>
            </div>
            <hr class="dark horizontal my-0"/>
            <div class="card-footer p-3">
           <br/>
            <i class="material-icons text-sm my-auto me-1">schedule</i>
               <span class="mb-0 text-sm">  2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <div class="chart">
                <ChartEducation />
                
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4 class="mb-0 ">EDUCATION</h4>
              <p class="text-sm text-dark">The Street Child Education Programme  provide quality inclusive education for conflict 
              affected children. This chart presents the overall education programme target reached in its implementation across the BAY states.</p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm"> Updated 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div class="chart">
                <ChartProtection/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4 class="mb-0 "> PROTECTION </h4>
              <p class="text-sm text-dark"> The Street Child Protection Programme  provide quality inclusive education for conflict 
              affected children. This chart presents the overall education programme target reached in its implementation across the BAY states. </p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm"> updated 4 min ago </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                <div class="chart" height="100">
                <ChartLivelihood/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4 class="mb-0 ">LIVELIHOOD</h4>
              <p class="text-sm  text-dark pre-scrollable">The Street Child Livelihood Programme  provide quality inclusive education for conflict 
              affected children. This chart presents the overall education programme target reached in its implementation across the BAY states. </p>
              <hr class="dark horizontal"/>
              <div class="d-flex ">
                <i class="material-icons text-sm my-auto me-1">schedule</i>
                <p class="mb-0 text-sm">just updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Grow>
      <AddDashboardData />
    </Container>
   </>
        
        
    )
}

export default Dashboard

