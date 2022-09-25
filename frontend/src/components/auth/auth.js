import React, {Fragment, useState} from 'react';
import {Container, IconButton, InputAdornment, AppBar, Paper, TextField,Typography, Grow, Grid, RootRef,Button , Avatar, Toolbar} from "@material-ui/core";
import {GoogleLogin} from 'react-google-login';
import useStyles from './styles';
import Input from './input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:'' }

const Auth = () =>  {

const classes = useStyles();
const dispatch = useDispatch();
const history = useNavigate();
const [ formData, setFormData ] = useState(initialState);
const [ showPassword, setShowPassword ] = useState(false);
const [ isSignUp, setIsSignUp ] = useState(false)
   

const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(formData);
        if(isSignUp){
            dispatch(signup(formData, history))
        } else {
          dispatch(signin(formData, history))   
        }
    };

const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword );

const handleChange = (e)=> {setFormData({ ...formData,[e.target.name]: e.target.value })}

const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    //const googleSuccess = async (res) => {
      //     const result = res?.profileObj
        //    const token = res?.tokenId;
           // try{
          //          dispatch({type:"AUTH", data: {result, token}})
             //       history.push('/')
        //    }catch(err){
          //              console.log(err)
          //  }
   // }

    
    //const googleFailure = (error) => {
      //  console.log(error)
       // console.log("Sign In Unsuccessful")
   // }

    return (
    <Container fullWidth fullHeight>
        <Container component="main" maxWidth='xs' >
             <Paper className={classes.paper} elevation={3}>
                 <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                 </Avatar>
    <Typography variant='h5' color="#FBA536">{isSignUp ? "Sign up": "Sign in"}</Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            {
                isSignUp &&  (
                <Fragment>                  
                    <Input name ="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    <Input name ="lastName" label="Last Name" handleChange={handleChange} half/>
                </Fragment>
                )}
                <Input name='email'label='Email Address' handleChange={handleChange} type='email'/>
                <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text': 'password'} handleShowPassword={handleShowPassword}/>
                
        </Grid>
       
        <Button type="submit" fullWidth variant="contained" color="#FBA536" className={classes.submit}>
            {isSignUp ?  'Sign Up' : " Sign In"}
        </Button>
       












       
        <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an account? Sign In' : ' Dont have an account? Sign up'}
                        </Button>
                    </Grid>
        </Grid>
    </form>
             </Paper>
        </Container>
        </Container>
    )
}

export default Auth
