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
import Alert from '@material-ui/lab/Alert';





class Registration extends Component {


    //Using for redirecting after register form




    state = {
        lastname: '',
        firstname: '',
        middlename: '',
        username: '',
        password: '',
        email: '',
        telnumber: '',
        regState: false,
        formErrors: {firstname: '', lastname: '', middlename: '', username: '', email: '', password: '', telnumber: ''},
        firstnameValid: false,
        lastnameValid: false,
        middlenameValid: false,
        usernameValid: false,
        telnumberValid: false,
        emailValid: false,
        passwordValid: false,
        formValid: false,
        token: ''
    }

    
    // onChange = (e) => {
    //     this.setState( {[e.target.name]: e.target.value}, 
    //         () => { this.validateField(name, e.target.value) });
    // }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstnameValid = this.state.firstnameValid;
        let lastnameValid = this.state.lastnameValid;
        let middlenameValid = this.state.middlenameValid;
        let usernameValid = this.state.usernameValid;
        let telnumberValid = this.state.telnumberValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        
      switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'firstname':
            firstnameValid = value.length >= 3;
            fieldValidationErrors.firstname = firstnameValid ? '' : 'Ошибка';
            break;
          case 'lastname':
            lastnameValid = value.length >= 3;
            fieldValidationErrors.lastname = lastnameValid ? '' : 'Ошибка';
            break;
          case 'middlename':
            middlenameValid = value.length >= 3;
            fieldValidationErrors.middlename = middlenameValid ? '' : 'Ошибка';
            break;
          case 'username':
            usernameValid = value.length >= 3;
            fieldValidationErrors.username = usernameValid ? '' : 'Минимальная длина 3 буквы';
            break;
          case 'telnumber':
            telnumberValid = value.length >= 3;
            fieldValidationErrors.telnumber = telnumberValid ? '' : 'Минимальная длина 3 буквы';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        firstnameValid: firstnameValid,
                        middlenameValid: middlenameValid,
                        lastnameValid: lastnameValid,
                        usernameValid: usernameValid,
                        telnumberValid: telnumberValid
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.emailValid &&
                                  this.state.passwordValid &&
                                  this.state.firstnameValid &&
                                  this.state.lastnameValid &&
                                  this.state.middlenameValid &&
                                  this.state.usernameValid &&
                                  this.state.telnumberValid
                                });
      }

    onSubmit = (e) => {

        const {lastname, firstname, middlename, username, password, email, telnumber} = this.state;

        var data = {
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            telnumber: this.state.telnumber,
        }

        const axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'no-cors',

            }
          };

        e.preventDefault();
        Axios.post('http://localhost:8080/api/auth/registration', JSON.stringify(data), axiosConfig)
        .then(response => {
            // this.setState({regState: true});
            
            
                // console.log(response.status);


                console.log("STATUS: " + response.status);
                console.log("JWT: " + response.data);

                this.setState({token: response.data});
                
                // this.sendJWT();
                // this.props.addJWT();

                localStorage.clear();

                localStorage.setItem('token', response.data);
                localStorage.setItem('logging', "true");
                this.setState({regState: true});

                this.props.login();
                this.props.getUser();
                

                
                


            }


        )
        .catch(response => {







            
            if (response.status == 401) {
                alert("Пользователь с данным логином уже зарегистрирован!");
            } else {

            // alert("Ничего не работает! Всё плохо(((");
            }
            // alert("Ничего не работает! Всё плохо(((");

        }) 
        

        // console.log(JSON.stringify(this.state))
        

        // fetch('http://localhost:8080/registration', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'mode': 'cors',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(this.state)
        //   })

        this.setState({lastname: ''});
        this.setState({firstname: ''});
        this.setState({middlename: ''});
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({email: ''});
        this.setState({telnumber: ''});



    }



    render() {

        if (this.state.regState === true) {
            this.setState({regState: false});

            return(
                <div>
                    <Redirect to="/"/>
                    <Alert closeText={'X'} color ={'success'}/>

                 </div>
            )
        }


        if (this.state.regState === false) {

        return (
            <Grid container style={bodyStyle} spacing={0}>

            <form onSubmit={this.onSubmit} className="col-8 mt-4 shadow p-3 mb-5 bg-white rounded">
            <p class="mt-1 mb-3 font-weight-light text-primary h2 mx-auto bg-white rounded">Регистрация</p>

            <div>

                <FormErrors formErrors={this.state.formErrors} />
            </div>
            <Grid item md={12} style={{marginTop: 24}}>
                <TextField
                    name="lastname"
                    style={{marginRight: 12}}
                    type="text"
                    id="outlined-basic" 
                    label="Фамилия" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.lastname}
                    placeholder="Введите фамилию"
                /><TextField
                    type="text"
                    name="firstname"
                    style={{marginLeft: 12}}
                    id="outlined-basic" 
                    label="Имя" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.firstname}
                    placeholder="Введите имя"
                />
                <TextField
                    style={{marginLeft: 12}}
                    name="middlename"
                    type="text"
                    id="outlined-basic" 
                    label="Отчество" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.middlename}
                    placeholder="Введите отчество"
                />
            </Grid>
            <Grid item md={12} style={{marginTop: 24}}>
                <TextField
                    style={{marginRight: 12}}
                    name="username"
                    type="text"
                    id="outlined-basic" 
                    label="Логин" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.username}
                    placeholder="Введите логин"
                />
                <TextField 
                    type="password"
                    name="password"
                    style={{marginLeft: 12}}
                    id="outlined-basic" 
                    label="Пароль" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.password}
                    placeholder="Введите пароль"
                />
            </Grid>
            <Grid item md={12} style={{marginTop: 24}}>
                <TextField 
                    type="text"
                    name="email"
                    style={{marginRight: 12}}
                    id="outlined-basic" 
                    label="E-mail" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.email}
                    placeholder="Введите email"
                />
                <TextField 
                    type="text"
                    name="telnumber"
                    style={{marginLeft: 12}}
                    id="outlined-basic" 
                    label="Номер телефона" 
                    variant="outlined"
                    onChange={this.onChange}
                    value={this.state.telnumber}
                    placeholder="Введите номер телефона"
                />

            </Grid>
        

                    {/* <button type="submit" class="btn btn-primary mx-auto">Зарегистрироваться</button> */}
                <input 
                    type="submit" 
                    value="Зарегистрироваться" 
                    className="btn"
                    disabled={!this.state.formValid}
                    style = {buttonStyle}
                />

                    


                     </form>


                     
                     </Grid>


        )
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


  

export default Registration;