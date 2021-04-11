import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SelectField from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import FormErrors from '../layout/FormErrors';
import AuthPanel from '../Panels/AuthPanel';

class Login extends Component {


    state = {
        username: '',
        password: '',
        usernameValid: false,
        passwordValid: false,
        formValid: false,
        formErrors: {usernameValid: '', password: ''},
        regState: false
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
    }


    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
        let usernameValid = this.state.usernameValid;

        switch(fieldName){
            case 'username':
                usernameValid = value.length >= 3;
                fieldValidationErrors.username = usernameValid ? '' : 'Минимальная длина 3 буквы';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
            break;
        }

        this.setState({formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid
        }, this.validateForm);
    }


    validateForm() {
        this.setState({formValid: this.state.passwordValid &&
                                  this.state.usernameValid
                                });
      }


    
    
    onSubmit = (e) => {

    const {password, username} = this.state;

    var data = {
        username: this.state.username,
        password: this.state.password
    }

    const axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',

        }

    }


    e.preventDefault();
    Axios.post('http://localhost:8080/api/auth/login', JSON.stringify(data), axiosConfig)
    .then(response => {

        console.log("HTTP AUTH STATUS: " + response.status);
        console.log("JWT " + response.data.token);
        console.log("USERNAME " + response.data.username);

        if (response.status == 200){
            localStorage.clear();
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('logging', "true");
            this.setState({regState: true});

        }

    })
    }

    render(){



        if (this.state.regState === true) {
            this.setState({regState: false});
            this.props.login();
            this.props.getUser();
            
            return(
                <div>
                    <Redirect to="/"/>
                    
                </div>

            )
        } else {



    return(
        <Grid container style={bodyStyle} spacing={0}>

        <form onSubmit={this.onSubmit} className="col-8 mt-4 shadow p-3 mb-5 bg-white rounded">
        <p class="mt-1 mb-3 font-weight-light text-primary h2 mx-auto bg-white rounded">Авторизация</p>

        <div>
            <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Grid item md={12} style={{marginTop: 24}}>
        <TextField
                name="username"
                type="text"
                id="outlined-basic" 
                label="Логин" 
                variant="outlined"
                onChange={this.onChange}
                value={this.state.username}
                placeholder="Введите логин"
            />
        </Grid>
        <Grid item md={12} style={{marginTop: 24}}>
            <TextField 
                type="password"
                name="password"
                id="outlined-basic" 
                label="Пароль" 
                variant="outlined"
                onChange={this.onChange}
                value={this.state.password}
                placeholder="Введите пароль"
            />
        </Grid>
    
            <input 
                type="submit" 
                value="Войти" 
                className="btn"
                disabled={!this.state.formValid}
                style = {buttonStyle}
            />

                


                 </form>
                 </Grid>



    );
    }
    }
}



const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    marginTop: 24,
    padding: '0 30px',
}

const formStyle = {
    align: 'center'
}

const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Login;