import {Chart as ChartJS} from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useStyles from '../styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import '../index.css';
import React, { useEffect, useState, Fragment } from "react";
import AccessibleForwardTwoToneIcon from '@mui/icons-material/AccessibleForwardTwoTone';
import {Container, AppBar, Typography, Grow, Grid, RootRef} from "@material-ui/core";
import axios from 'axios';
import { Doughnut, Bar, Line } from 'react-chartjs-2';



function ChartLivelihood() {

  const indicators = useSelector((state) => state.indicators);
  const [indicatorData, setIndicatorData] = useState({
  //  labels: indicators.map((data) => data.educationBoysReached),
  //labels:['Tgt','M','F', 'N_Reach', 'T_Reach'],
  labels:['Boys','Girls','Men', 'Women'],
    datasets: [
      {
        label: "Overall Target Reached",
       // data: indicators.map((data) => [data.indicatorTarget, data.livelihoodBoysReached,  data.livelihoodGirlsReached,data.newTargetReached, data.overallTargetReached]),
      data:[8,3,7,2],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#FBA536",
          "red",
          "#2a71d0",
        ],
        borderColor: '',
        borderWidth: 1,
      },
    ],
  });

    return (
        <Bar  data={indicatorData } 
        height={300}
        options= {{
            scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks:{
                    color:"white",
                    font: {
                        size: 14,
                        family: "Verdana",
                        style: 'normal',
                        lineHeight: 2,
                        fontWeight:'bold'
                      },
                  }
                },
          
                y: {
                  grid: {
                    // display: false,
                    color: 'rgba(217,143,7,0.1)',
                    
                  },
                  ticks:{
                    color:"white",
                    font: {
                        size: 14,
                        family: "Helvetica",
                        style: 'normal',
                        lineHeight: 2,
                        fontWeight:'bold'
                      },
                  }
                },
              },
        }}
        />
    )
}

export default ChartLivelihood;
