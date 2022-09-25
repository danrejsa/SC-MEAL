import React, {useState, useEffect, Fragment} from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography}  from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { deleteProject } from "../../../actions/projects";
import '../toolStyle.css';
import fileDownload from 'js-file-download';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux"; 
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { createProject, updateProject } from '../../../actions/projects';


const AddProject = ({currentId,project, setCurrentId }, props )  => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );


    const [projectData, setProjectData] = useState({projectTitle: '', projectDonor: '', projectCode: '', projectDuration: '', projectDescription:'', projectReportLink: '' , projectToolLink:""});
    //const project_ = useSelector((state) => (currentId ? state.projects.find((p) => p._id === currentId) : null)); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(project) setProjectData(project);},[project]);

 const clear = () => {
        setCurrentId(0);
        setProjectData({projectTitle: '', projectDonor: '', projectCode: '', projectDuration: '', projectDescription:'', projectReportLink: '' , projectToolLink:""});
};

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(project._id === 0){ 
        dispatch(createProject(projectData));
      } else {dispatch(updateProject(project._id, projectData))
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
  setCurrentId(project._id)

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
   <h6 class="mb-0">{project.projectTitle}</h6>
   <h9 class="mb-0"><span  class="text-danger text-sm">Project Donor: </span>{ project.projectDonor}</h9>
   <p class="text-sm" ><span class="text-success">Project Code: </span>{ project.projectCode}</p>
               <hr class="dark horizontal"/>
               <div class="d-flex">
                 <i class="material-icons text-sm my-auto me-1">schedule</i>
                 <p class="mb-0 text-sm"> Updated {moment(project.createdAt).fromNow()}</p>
               </div>
         <div class="d-flex" styles={{justifyContent: 'flex-end'}}>
         <span class='m-2' >
         <EditIcon fontSize="small" 
         onClick={handleEdit}/>
         Edit
         </span>
         <span  class='m-2' >
         <DeleteIcon fontSize="small"  onClick={() => dispatch(deleteProject(project._id))}/>
         Delete                         
         </span>
         <span  class='m-2' >
         <a target="_blank" href={project.projectReportLink} title="">
         <HomeRepairServiceIcon/>
         Tools</a>
         </span>
         <span  class='m-2' >
          <a target="_blank" href={project.projectReportLink} title="">
         <AssessmentIcon fontSize="small"/>
         Reports</a>
         </span>
               </div>
              
             </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
        {project._id ? "Edit " : "Add New "} Project
        </ModalHeader>
        <ModalBody>
      <Form  autoComplete='off' noValidate  onSubmit={handleSubmit}>
      <FormGroup >
      <Label for="projectTitle" >
          Project Title
        </Label>
        <Input
        className="square border border-muted"
        id="projectTitle"
        name="projectTitle"
        type="text"
        maxlength="30"
        required
        value={projectData.projectTitle}
        onChange={(e) => setProjectData({...projectData, projectTitle: e.target.value})}
        />
      </FormGroup>
    <FormGroup>
    <Label for="projectDonor">
      Project Donor
    </Label>
    <Input
    className="square border border-muted"
      id="projectDonor"
      name="projectDonor"
      type="text"
      maxlength="30"
      required
      value={projectData.projectDonor}
        onChange={(e) => setProjectData({...projectData, projectDonor: e.target.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="projectCode">
      Project Code
    </Label>
    <Input
    className="square border border-muted"
      id="projectCode"
      name="projectCode"
      type="text"
      required
      maxlength="15"
      value={projectData.projectCode}
      onChange={(e) => setProjectData({...projectData, projectCode: e.target.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="projectDuration">
      Project Duration
    </Label>
    <Input
    className="square border border-muted"
      id="projectDuration"
      name="projectDuration"
      type='number'
      required
      maxlength="10"
      value={projectData.projectDuration}
        onChange={(e) => setProjectData({...projectData, projectDuration: e.target.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="projectDescription">
      Project Description
    </Label>
    <Input
    className="square border border-muted"
      id="projectDescription"
      name="projectDescription"
      type="text"
      required
      maxlength="50"
      value={projectData.projectDescription}
      onChange={(e) => setProjectData({...projectData, projectDescription: e.target.value})}
    />
  </FormGroup>
  <FormGroup>
   <Label for="selectedFile_">
    Upload Project Document
   </Label>
   <FileBase
   className="square border border-muted"

  name="selectedFile_"
  multiple={false}
  type="file"
  
    onDone={({base64}) => setProjectData({...projectData, selectedFile: base64})}
   />
 </FormGroup>
 <Button color="primary">
          {project._id ? "Update " : "Add New "} Project
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
AddProject.propTypes = {
    className: PropTypes.string,
  };   
export default AddProject;
