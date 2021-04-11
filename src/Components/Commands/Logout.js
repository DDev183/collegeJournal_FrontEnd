import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Logout extends React.Component{

    

    render(){

        console.log("Logouting....");
        localStorage.clear();
        this.props.login();

    return(
        <div>
        <Redirect to="/"/>
        </div>
    );
    }
}

export default Logout;