import React, {useState, useEffect} from 'react';
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux"; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import {Paper} from "@material-ui/core";
import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { createTool, updateTool } from '../../actions/tools';

const AddToolForm = ({currentId, setCurrentId},props)  => {

  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );

  const [toolData, setToolData] = useState({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', toolLink:"" });
    const tool = useSelector((state) => (currentId ? state.tools.find((p) => p._id == currentId) : null)); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(tool) setToolData(tool);},[tool])


    const handleSubmit = (e) => {
      e.preventDefault();
      if(currentId === 0){ 
        dispatch(createTool(toolData));
      } else {dispatch(updateTool(currentId, toolData))
      clear();
      }
      toggle()
      }
      
      const clear = () => {
        setCurrentId(0);
        setToolData({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', toolLink:"" });
       }

return (
  <div class="container-fluid py-3">
          <div class="row" > 
            <div styles={{width:'50px'}} >
              <div styles={{width:'50px'}} >
                <div class="card-header p-2 pt-2" id="add_new_indicator" onClick={toggle}>
                  <div class="text-center pt-1" >
                    <h5 class="text-sm mb-0 text-capitalize">Add New Tool</h5>
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
         Upload New Tool
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
          {currentId ? "Update " : "Add New "} Tool
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
AddToolForm.propTypes = {
    className: PropTypes.string,
  };   
export default AddToolForm;
