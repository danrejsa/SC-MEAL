import React, {useState, useEffect} from 'react';
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux"; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import {Paper} from "@material-ui/core";
import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { createProject, updateProject } from '../../actions/projects';

const AddProjectForm = ({currentId, setCurrentId},props)  => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );

  const [projectData, setProjectData] = useState({projectTitle: '', projectDonor: '', projectCode: '', projectDuration: '', projectDescription:'', projectReportLink: '', projectToolLink:"" });
    const project = useSelector((state) => (currentId ? state.projects.find((p) => p._id === currentId) : null)); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(project) setProjectData(project);},[project]);

 const clear = () => {
        setCurrentId(0);
        setProjectData({projectTitle: '', projectDonor: '', projectCode: '', projectDuration: '', projectDescription:'', projectReportLink: '', projectToolLink:"" });
};

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(currentId === 0){ 
        dispatch(createProject(projectData));
      } else {dispatch(updateProject(currentId, projectData))
      clear();
      }
      toggle()
  };
      


     

  
  //const classes = useStyles();
return (
  <div class="container-fluid py-3">
          <div class="row" > 
            <div styles={{width:'50px'}} >
              <div styles={{width:'50px'}} >
                <div class="card-header p-2 pt-2" id="add_new_indicator" onClick={toggle}>
                  <div class="text-center pt-1" >
                    <h5 class="text-sm mb-0 text-capitalize">Add New Project</h5>
                   <AddTwoToneIcon fontSize='small'/> 
                  </div>
                </div>
                <hr class="dark horizontal my-0"/>
                <div class="card-footer p-3">          
                </div>
              </div>
            </div>
           </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
        {currentId ? "Edit " : "Add New "} Project
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
    <Label for="projectReportLink">
      Report Link
    </Label>
    <Input
    className="square border border-muted"
      id="projectReportLink"
      name="projectReportLink"
      type="text"
      required
      
      value={projectData.projectReportLink}
      onChange={(e) => setProjectData({...projectData, projectReportLink: e.target.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="projectToolLink">
      Tools Link
    </Label>
    <Input
    className="square border border-muted"
      id="projectToolLink"
      name="projectToolLink"
      type="text"
      required
      value={projectData.projectToolLink}
      onChange={(e) => setProjectData({...projectData, projectToolLink: e.target.value})}
    />
 </FormGroup>
 <Button color="primary">
          {currentId ? "Update " : "Add New "} Project
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
        )  
}
AddProjectForm.propTypes = {
    className: PropTypes.string,
  };   
export default AddProjectForm;
