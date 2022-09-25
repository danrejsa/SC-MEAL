import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';


// Actions for Project
export const getIndicators = () => async (dispatch) => { 
    try {
            const { data  } = await api.fetchIndicators();
            dispatch({type: FETCH_ALL, payload: data });
    } catch (err){
            console.log(err.message );
    }
};

export const createIndicator = (indicator) => async (dispatch) => {
        try {
                const { data } = await api.createIndicator(indicator);
                dispatch({ type: CREATE, payload:data });
        } catch (err){
                console.log(err.message );
        }
};

export const updateIndicator = (id, indicator) => async (dispatch) => {    
        try {
                const { data } = await api.updateIndicator(id, indicator);
                dispatch({ type: UPDATE, payload:data });            
        } catch (error){
                console.log(error);
        }
};

export const deleteIndicator = (id) => async (dispatch) => {
        try {
              await api.deleteIndicator(id);
                dispatch({ type: DELETE, payload:id })         
        } catch (error){
                console.log(error.message);
        }
};




    
    
        