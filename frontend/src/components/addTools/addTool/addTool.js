
import React, {useState, useEffect, Fragment} from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography}  from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { deleteTool } from "../../../actions/tools";
//import '../toolStyle.css';
import fileDownload from 'js-file-download';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux"; 
import { createTool, updateTool } from '../../../actions/tools';


const AddTool = ({currentId,tool, setCurrentId }, props )  => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );


    const [toolData, setToolData] = useState({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', toolLink:"" });
    //const project_ = useSelector((state) => (currentId ? state.projects.find((p) => p._id === currentId) : null)); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(tool) setToolData(tool);},[tool]);

 const clear = () => {
        setCurrentId(0);
         setToolData({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', toolLink:"" });
};

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(tool._id === 0){ 
        dispatch(createTool(toolData));
      } else {dispatch(updateTool(tool._id, toolData))
      clear();
      }
      toggle()
  };


  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }


const handleEdit = async (e) => {
  e.preventDefault();
  toggle();
  setCurrentId(tool._id)

}


  const section = {
  height:'250px',
    margin: 25,
    backgroundColor: "",
    fontSize:'12px'
  };

    return (
      <>

           <div class="card " style={section}>
             <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-0 bg-transparent">
               <div class="bg-gradient-light shadow-light border-radius-lg py-3 pe-1 h-10">
                 <div class="chart h-20">
               
                 
                
                 </div>
               </div>
             </div>
             <div class="card-body h-20">
 
   <h9 class="mb-0 text-sm lead" ><span  class="text-danger ">Format: </span>{ tool.toolFormat}</h9>
   <p class="text-sm" ><span class="text-success">Description: </span>{ tool.toolDescription}</p>
     <p class="mb-0">{tool.toolName}</p>
               <hr class="dark horizontal"/>
               <div class="d-flex">
                 <i class="material-icons text-sm my-auto me-1">schedule</i>
                 <p class="mb-0 text-sm"> Updated {moment(tool.createdAt).fromNow()}</p>
               </div>
         <div class="d-flex" styles={{justifyContent: 'flex-end'}}>
         <span class='m-2' >
        <a href={tool.toolLink} target="_blank">  <button type="button" class="btn btn-primary m-3 btn-sm"><i class="fas fa-download"></i></button></a> 
    <button  onClick={handleEdit} type="button" class="btn btn-success m-3 btn-sm"><i class="fas fa-edit"></i></button>
    <button onClick={() => dispatch(deleteTool(tool._id))} type="button" class="btn btn-danger m-3 btn-sm"><i class="far fa-trash-alt "></i></button>
         </span>
               </div>
              
             </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
        {tool._id ? "Edit " : "Add New "} Tool
        </ModalHeader>
        <ModalBody>
      <Form  autoComplete='off' noValidate onSubmit={handleSubmit}>
 <FormGroup >
   <Label for="toolName" >
     Tool Name
   </Label>
   <Input
   className="square border border-muted"
     id="toolName"
     name="toolName"
     type="text"
     value={toolData.toolName}
      onChange={(e) => setToolData({...toolData, toolName: e.target.value})}
   />
 </FormGroup>
 <FormGroup>
   <Label for="toolDescription">
     Tool Description
   </Label>
   <Input
   className="square border border-muted"
     id="toolDescription"
     name="toolDescription"
     type="text"
     value={toolData.toolDescription}
     onChange={(e) => setToolData({...toolData, toolDescription: e.target.value})}
   />
 </FormGroup>
 <FormGroup>
   <Label for="frequency">
     Frequency
   </Label>
   <Input
   className="square border border-muted"
     id="frequency"
     name="frequency"
     type="select"
     value={toolData.toolFrequency}
     onChange={(e) => setToolData({...toolData, toolFrequency: e.target.value})}
   >
    <option></option>
    <option>Once</option>
     <option>Daily</option>
     <option>Weekly</option>
     <option>Monthly</option>
     <option>Quarterly/Termly</option>
     <option>Bi-annually</option>
     <option>Annually</option>
     <option>On Demand</option>
   </Input>
 </FormGroup>
 
 <FormGroup>
   <Label for="toolFormat">
     Format 
   </Label>
   <Input
   className="square border border-muted"
     id="toolFormat"
     name="toolFormat"
     type="select"
     value={toolData.toolFormat}
     onChange={(e) => setToolData({...toolData, toolFormat: e.target.value})}
   >
    <option></option>
    <option>PAPI (Hard copy)</option>
     <option>CAPI (Electronic)</option>
     <option>PAPI and CAPI</option>
   </Input>
 </FormGroup>
 
 <FormGroup>
   <Label for="toolResponsible">
    Responsible (Required by)
   </Label>
   <Input
   className="square border border-muted"
     id="toolRespopnsible"
     name="toolResponsible"
     type="select"
     value={toolData.toolResponsible}
     onChange={(e) => setToolData({...toolData, toolResponsible: e.target.value})}
   >
    <option></option>
     <option>Education</option>
     <option>Protection</option>
     <option>Livelihood</option>
     <option>MEAL</option>
     <option>Finance</option>
     <option>Operations</option>
     <option>Others</option>
   </Input>
 </FormGroup>
 
 <FormGroup>
   <Label for="toolLink">
     Tool Link 
   </Label>
   <Input
   className="square border border-muted"
     id="toolLink"
     name="toolLink"
     type="text"
     value={toolData.toolLink}
     onChange={(e) => setToolData({...toolData, toolLink: e.target.value})}
   />
 </FormGroup>
 <Button color="primary">
          {tool._id ? "Update " : "Add New "} Tool
          </Button>{' '}
          <Button color="secondary" onClick={clear}>
            Clear
          </Button>
</Form>
  </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
           </div>
         
         </>
    )
}; 
AddTool.propTypes = {
    className: PropTypes.string,
  };   
export default AddTool;