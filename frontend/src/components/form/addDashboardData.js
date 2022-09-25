import React, {useState, useEffect} from 'react';
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux"; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import {Paper} from "@material-ui/core";
import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { createTool, updateTool } from '../../actions/tools';


const AddDashboardData = ({currentId, setCurrentId},props)  => {

  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );

  const [toolData, setToolData] = useState({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', selectedFile: '' });
    const tool = useSelector((state) => currentId ? state.tools.find((p) => p.id == currentId) : null); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(tool) setToolData(tool);},[tool])


    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(currentId){ dispatch(updateTool(currentId, toolData));
      } else {dispatch(createTool(toolData))
      }
      clear();
      toggle()
      }
      
      const clear = () => {
        setCurrentId(null);
        setToolData({toolName: '', toolDescription: '', toolFrequency: '', toolFormat: '', toolResponsible:'', selectedFile: '' });
       }

return (
  <div class="container-fluid py-3">
          <div class="row" > 
            <div styles={{width:'50px'}} >
              <div styles={{width:'50px'}} >
                <div class="card-header p-2 pt-2" id="add_new_indicator" onClick={toggle}>
                  <div class="text-center pt-1" >
                    <h5 class="text-sm mb-0 text-capitalize">{currentId ? "Click HERE to Update GLOBAL DASHBOARD " : "UPDATE GLOBAL DASHBOARD"}</h5>
                    {currentId ? "" : <AddTwoToneIcon fontSize='large'/>} 
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
         Update Global Dashboard
       </ModalHeader>
       <ModalBody>
<Form  autoComplete='off' noValidate onSubmit={handleSubmit}>
 <FormGroup >
   <Label for="toolName" >
     Total Unique Boys Reached 
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Girls Reached 
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Men Reached 
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Women Reached 
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique PWDs Reached 
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
 <FormGroup >
   <Label for="toolName" >
     Overall Unique Reach (reporting month) 
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
 <h6>Reached by Departments</h6>
 <p>Education</p>
 <FormGroup >
   <Label for="toolName" >
     Total Unique Male reached
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Female reached
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
 <p>Protection</p>
 <FormGroup >
   <Label for="toolName" >
     Total Unique Male reached
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Female reached
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
 <p>Livelihood</p>
 <FormGroup >
   <Label for="toolName" >
     Total Unique Male reached
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
 <FormGroup >
   <Label for="toolName" >
     Total Unique Female reached
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
 
 <Button color="#FBA536">
          {currentId ? "Edit Dashboard " : "Update Dashboard"} 
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
AddDashboardData.propTypes = {
    className: PropTypes.string,
  };   
export default AddDashboardData;
