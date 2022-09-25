import React from 'react';
import '../index.css';
//import GoogleMap from "./googleMap.js";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';




function Home() {
    return (
        <div className="homepage">
            <h5>STREET CHILD MEAL DASHBOARD</h5>
            <p styles={{textAlign:"left"}}>
            The maiden Dashboard presents information on the progress made towards achieving the output results 
            of project which seeks to ensure that girls in P5 and P6 have access to 
            quality education and learning and are supported to transition from primary to secondary school, to
             enable them to fulfil their potential and reduce the risks associated with being out of school. 

The Dashboard presents the project target, what was achieved in the 1ST Quarter (January, February and March), 
2022 and the cumulative achievement to date. This will assit the intervention managers with the information 
to
 know the progress been made and where there is need for project redesign.

The project has a number of outputs and indicators that tracks the progress towards the results of the project.
 In general, the information presented here indicates that the project is moving towards achieving the output results target  
            </p>
            <wrappedMap  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `50%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }}/>}
        />

        </div>
    )
}

export default Home
