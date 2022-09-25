import axios from 'axios';

const api = axios.create({ baseURL: 'https://sc-meal-nigeria.herokuapp.com/' });
//const url = 'http://localhost:5000/Indicators';
//const url2 = 'http://localhost:5000/tools';
//const url3 = 'http://localhost:5000/users/signup';
//const url4 = 'http://localhost:5000/users/signin';

//api for projects
export const fetchProjects = () => api.get('/projects');  
export const createProject = (newProject) => api.post('/projects', newProject);
export const updateProject = (id, updatedProject ) => api.patch(`/projects/${id}`, updatedProject );
export const deleteProject = (id) => api.delete(`/projects/${id}`);

export const fetchTools = () => api.get('/tools');  
export const createTool = (newTool) => api.post('/tools', newTool);
export const updateTool = (id, updatedTool ) => api.patch(`/tools/${id}`, updatedTool );
export const deleteTool = (id) => api.delete(`/tools/${id}`);

export const signIn = (formData) => api.post('/users/signin', formData);
export const signUp = (formData) => api.post('/users/signup', formData);


export const fetchIndicators = () => api.get('/indicators');  
export const createIndicator = (newIndicator) => api.post('/indicators', newIndicator);
export const updateIndicator = (id, updatedIndicator ) => api.patch(`/indicators/${id}`, updatedIndicator );
export const deleteIndicator = (id) => api.delete(`/indicators/${id}`);


