
import React, {useState, useEffect, Fragment} from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography}  from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { deleteIndicator } from "../../../actions/indicators";
import '../../toolStyle.css';
import fileDownload from 'js-file-download';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import { createIndicator, updateIndicator } from '../../../actions/indicators';
import {Chart as ChartJS} from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useStyles from '../../../styles';
import '../../../index.css';
import AccessibleForwardTwoToneIcon from '@mui/icons-material/AccessibleForwardTwoTone';

import { Doughnut, Bar, Line } from 'react-chartjs-2';

const AddIndicator = ({currentId,indicator, setCurrentId }, props )  => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );

  const section = {
  height:'250px',
    margin: 25,
    backgroundColor: "",
    fontSize:'12px'
  };
    return (
      <>

<div >
     <h5>This Page will be ready soon!!!</h5> 
        </div>
         </>
    )
}; 
AddIndicator.propTypes = {
    className: PropTypes.string,
  };   
export default AddIndicator;