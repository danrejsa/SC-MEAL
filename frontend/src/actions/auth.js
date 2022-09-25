import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';
import { useHistory } from 'react-router-dom';

export const signin = (formData, history) => async (dispatch) => {
try {
  const { data } = await api.signIn(formData)
  dispatch({ type: AUTH, data });

 history.push('/');

} catch (err) {
    console.log(err.message);
}
};
export const signup = (formData, history) => async (dispatch) => {
try {
  const { data } = await api.signUp(formData);
  dispatch({ type: AUTH, data });
//console.log('sucessful sign up')
history.push('/');
} catch (err) {
    console.log(err.message);
};}


