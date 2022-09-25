import React, {useState, useEffect} from 'react';
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux"; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import {Paper} from "@material-ui/core";
import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { createIndicator, updateIndicator } from '../../actions/indicators';

const AddIndicatorForm = ({currentId, setCurrentId},props)  => {

  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
  <button className="close" onClick={toggle} type="button">
    &times;
  </button>
    );

  const [indicatorData, setIndicatorData] = useState({
  indicatorTitle:'', projectName: '', indicatorComponent:"", indicatorTarget:"",
  indicatorBaseline:"", reportQuarter:"", educationBoysReached:"", educationGirlsReached:"", 
  educationMenReached:"", educationWomenReached:"", educationPWDsReached:"",
  tlsBuilt:"", protectionBoysReached:"", protectionGirlsReached:"", protectionWomenReached:"",
  protectionPWDsReached:"", livelihoodBoysReached:"", livelihoodGirlsReached:"",
  livelihoodMenReached:"", livelihoodWomenReached:"", livelihoodPWDsReached:"", newTargetReached:"",
  overallTargetReached:"" });
    const indicator = useSelector((state) => (currentId ? state.indicators.find((p) => p._id == currentId) : null)); 
    const dispatch = useDispatch();

    useEffect ( () => {
      if(indicator) setIndicatorData(indicator);},[indicator])


    const handleSubmit = (e) => {
      e.preventDefault();
      if(currentId === 0){ 
        dispatch(createIndicator(indicatorData));
      } else {dispatch(updateIndicator(currentId, indicatorData))
      clear();
      }
      toggle()
      }
      
      const clear = () => {
        setCurrentId(0);
        setIndicatorData({indicatorTitle:'', projectName: '', indicatorComponent:"", indicatorTarget:"",
  indicatorBaseline:"", reportQuarter:"", educationBoysReached:"", educationGirlsReached:"", 
  educationMenReached:"", educationWomenReached:"", educationPWDsReached:"",
  tlsBuilt:"", protectionBoysReached:"", protectionGirlsReached:"", protectionWomenReached:"",
  protectionPWDsReached:"", livelihoodBoysReached:"", livelihoodGirlsReached:"",
  livelihoodMenReached:"", livelihoodWomenReached:"", livelihoodPWDsReached:"", newTargetReached:"",
  overallTargetReached:"" });
       }

return (
  <div class="container-fluid py-3">
          <div class="row" > 
            <div styles={{width:'50px'}} >
              <div styles={{width:'50px'}} >
                <div class="card-header p-2 pt-2" id="add_new_indicator" onClick={toggle}>
                  <div class="text-center pt-1" >
                    <h5 class="text-sm mb-0 text-capitalize">{currentId ? "Click HERE to Update Indicator " : "Add New Indicator"}</h5>
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
         Create Indicator
       </ModalHeader>
       <ModalBody>
<Form  autoComplete='off' noValidate onSubmit={handleSubmit}>
 <FormGroup >
   <Label for="indicatorTitle" >
     Indicator Title
   </Label>
   <Input
   className="square border border-muted"
     id="indicatorTitle"
     name="indicatorTitle"
     type="text"
     value={indicatorData.indicatorTitle}
      onChange={(e) => setIndicatorData({...indicatorData, indicatorTitle: e.target.value})}
   />
 </FormGroup>
 <FormGroup>
          <Label for="projectName"> Project Name</Label>
          <Input type="select" 
          name="projectName" 
          id="projectName"
           value={indicatorData.projectName}
        onChange={(e) => setIndicatorData({...indicatorData, projectName: e.target.value})}

          >
           <option></option>
            <option>GIZ</option>
            <option>EU</option>
            <option>EFECT</option>
            <option>NHF</option>
            <option>ECW</option>
          </Input>
        </FormGroup>
<FormGroup>
          <Label for="indicatorComponent "> Indicator Component (Sector)</Label>
          <Input type="select" 
          name="indicatorComponent" 
          id="indicatorComponent"
           value={indicatorData.indicatorComponent}
        onChange={(e) => setIndicatorData({...indicatorData, indicatorComponent: e.target.value})}

          >
           <option></option>
            <option>Education</option>
            <option>Livelihood</option>
            <option>Protection</option>
           
          </Input>
        </FormGroup>
        <FormGroup >
   <Label for="indicatorTarget" >
     Indicator Target
   </Label>
   <Input
   className="square border border-muted"
     id="indicatorTarget"
     name="indicatorTarget"
     type="number"
     value={indicatorData.indicatorTarget}
      onChange={(e) => setIndicatorData({...indicatorData, indicatorTarget: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="indicatorBaseline" >
     Indicator Baseline
   </Label>
   <Input
   className="square border border-muted"
     id="indicatorBaseline"
     name="indicatorBaseline"
     type="number"
     value={indicatorData.indicatorBaseline}
      onChange={(e) => setIndicatorData({...indicatorData, indicatorBaseline: e.target.value})}
   />
 </FormGroup>
 <FormGroup>
          <Label for="reportQuarter"> Reporting Quarter</Label>
          <Input type="select" 
          name="reportQuarter" 
          id="reportQuarter"
           value={indicatorData.reportQuarter}
        onChange={(e) => setIndicatorData({...indicatorData, reportQuarter: e.target.value})}

          >
           <option></option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
          </Input>
        </FormGroup>
         <FormGroup >
   <Label for="educationBoysReached" >
     Total Number of Boys reached (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="educationBoysReached"
     name="educationBoysReached"
     type="number"
     value={indicatorData.educationBoysReached}
      onChange={(e) => setIndicatorData({...indicatorData, educationBoysReached: e.target.value})}
   />
 </FormGroup>
  <FormGroup >
   <Label for="educationGirlsReached" >
     Total Number of Girls reached (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="educationGirlsReached"
     name="educationGirlsReached"
     type="number"
     value={indicatorData.educationGirlsReached}
      onChange={(e) => setIndicatorData({...indicatorData, educationGirlsReached: e.target.value})}
   />
 </FormGroup>
 
 <FormGroup >
   <Label for="educationMenReached" >
     Total Number of Men reached (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="educationMenReached"
     name="educationMenReached"
     type="number"
     value={indicatorData.educationMenReached}
      onChange={(e) => setIndicatorData({...indicatorData, educationMenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="educationWomenReached" >
     Total Number of Women reached (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="educationWomenReached"
     name="educationWomenReached"
     type="number"
     value={indicatorData.educationWomenReached}
      onChange={(e) => setIndicatorData({...indicatorData, educationWomenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="educationPWDsReached" >
     Total Number of PWDs reached (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="educationPWDsReached"
     name="educationPWDsReached"
     type="number"
     value={indicatorData.educationPWDsReached}
      onChange={(e) => setIndicatorData({...indicatorData, educationPWDsReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="tlsBuilt" >
     Total Number of TLS Built/Renovated (Education)
   </Label>
   <Input
   className="square border border-muted"
     id="tlsBuilt"
     name="tlsBuilt"
     type="number"
     value={indicatorData.tlsBuilt}
      onChange={(e) => setIndicatorData({...indicatorData, tlsBuilt: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="protectionBoysReached" >
     Total Number of Boys reached (Protection)
   </Label>
   <Input
   className="square border border-muted"
     id="protectionBoysReached"
     name="protectionBoysReached"
     type="number"
     value={indicatorData.protectionBoysReached}
      onChange={(e) => setIndicatorData({...indicatorData, protectionBoysReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="protectionGirlsReached" >
     Total Number of Girls reached (Protection)
   </Label>
   <Input
   className="square border border-muted"
     id="protectionGirlsReached"
     name="protectionGirlsReached"
     type="number"
     value={indicatorData.protectionGirlsReached}
      onChange={(e) => setIndicatorData({...indicatorData, protectionGirlsReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="protectionMenReached" >
     Total Number of Men reached (Protection)
   </Label>
   <Input
   className="square border border-muted"
     id="protectionMenReached"
     name="protectionMenReached"
     type="text"
     value={indicatorData.protectionMenReached}
      onChange={(e) => setIndicatorData({...indicatorData, protectionMenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="protectionWomenReached" >
     Total Number of Women reached (Protection)
   </Label>
   <Input
   className="square border border-muted"
     id="protectionWomenReached"
     name="protectionWomenReached"
     type="number"
     value={indicatorData.protectionWomenReached}
      onChange={(e) => setIndicatorData({...indicatorData, protectionWomenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="protectionPWDsReached" >
     Total Number of PWDs reached (Protection)
   </Label>
   <Input
   className="square border border-muted"
     id="protectionPWDsReached"
     name="protectionPWDsReached"
     type="number"
     value={indicatorData.protectionPWDsReached}
      onChange={(e) => setIndicatorData({...indicatorData, protectionPWDsReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="livelihoodBoysReached" >
     Total Number of Boys reached (Livelihood)
   </Label>
   <Input
   className="square border border-muted"
     id="livelihoodBoysReached"
     name="livelihoodBoysReached"
     type="number"
     value={indicatorData.livelihoodBoysReached}
      onChange={(e) => setIndicatorData({...indicatorData, livelihoodBoysReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="livelihoodGirlsReached" >
     Total Number of Girls reached (Livelihood)
   </Label>
   <Input
   className="square border border-muted"
     id="livelihoodGirlsReached"
     name="livelihoodGirlsReached"
     type="number"
     value={indicatorData.livelihoodGirlsReached}
      onChange={(e) => setIndicatorData({...indicatorData, livelihoodGirlsReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="livelihoodMenReached" >
     Total Number of Men reached (Livelihood)
   </Label>
   <Input
   className="square border border-muted"
     id="livelihoodMenReached"
     name="livelihoodMenReached"
     type="number"
     value={indicatorData.livelihoodMenReached}
      onChange={(e) => setIndicatorData({...indicatorData, livelihoodMenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="livelihoodWomenReached" >
     Total Number of Women reached (Livelihood)
   </Label>
   <Input
   className="square border border-muted"
     id="livelihoodWomenReached"
     name="livelihoodWomenReached"
     type="number"
     value={indicatorData.livelihoodWomenReached}
      onChange={(e) => setIndicatorData({...indicatorData, livelihoodWomenReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="livelihoodPWDsReached" >
     Total Number of PWDs reached (Livelihood)
   </Label>
   <Input
   className="square border border-muted"
     id="livelihoodPWDsReached"
     name="livelihoodPWDsReached"
     type="number"
     value={indicatorData.livelihoodPWDsReached}
      onChange={(e) => setIndicatorData({...indicatorData, livelihoodPWDsReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="newTargetReached" >
     New Target Reached (Reporting Quarter)
   </Label>
   <Input
   className="square border border-muted"
     id="newTargetReached"
     name="newTargetReached"
     type="number"
     value={indicatorData.newTargetReached}
      onChange={(e) => setIndicatorData({...indicatorData, newTargetReached: e.target.value})}
   />
 </FormGroup>
 <FormGroup >
   <Label for="overallTargetReached" >
     Overall Target Reached
   </Label>
   <Input
   className="square border border-muted"
     id="overallTargetReached"
     name="overallTargetReached"
     type="number"
     value={indicatorData.overallTargetReached}
      onChange={(e) => setIndicatorData({...indicatorData, overallTargetReached: e.target.value})}
   />
 </FormGroup>
 <Button color="primary">
          {currentId ? "Update " : "Add New "} Indicator
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
AddIndicatorForm.propTypes = {
    className: PropTypes.string,
  };   
export default AddIndicatorForm;
