import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';


// Actions for Project
export const getTools = () => async (dispatch) => { 
    try {
            const { data  } = await api.fetchTools();
            dispatch({type: FETCH_ALL, payload: data });
    } catch (err){
            console.log(err.message );
    }
};

export const createTool = (tool) => async (dispatch) => {
        try {
                const { data } = await api.createTool(tool);
                dispatch({ type: CREATE, payload:data });
        } catch (err){
                console.log(err.message );
        }
};

export const updateTool = (id, tool) => async (dispatch) => {    
        try {
                const { data } = await api.updateTool(id, tool);
                dispatch({ type: UPDATE, payload:data });            
        } catch (error){
                console.log(error);
        }
};

export const deleteTool = (id) => async (dispatch) => {
        try {
              await api.deleteTool(id);
                dispatch({ type: DELETE, payload:id })         
        } catch (error){
                console.log(error.message);
        }
};




    
    
        