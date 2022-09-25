import { combineReducers } from 'redux';
import projects from './projects';
import tools from './tools';
import auth from './auth';
import indicators from './indicators';

export default combineReducers({ auth, projects, tools, indicators} );

