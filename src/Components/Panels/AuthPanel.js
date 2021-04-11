import React from 'react';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import AuthHeader from '../layout/AuthHeader';
import About from '../Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Logout from '../Commands/Logout';




export default function AuthPanel(props) {


    return (

        <div>
          <AuthHeader />
            {/* <Route exact path="/" render={props => (
              <React.Fragment>
                  <AddTodo 
                    addTodo={this.addTodo}
                  />
                  <Todos todos={this.state.todos} 
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
  
              </React.Fragment>
            )} /> */}
  
            
            <Route path="/news"/>
            <Route path="/panel"/>
            <Route path="/logout" onClick={this.props.logout} component={Logout}/>
            <Route path="/profile"/>
{/* 
            <Route path="/news" component={News} />
            <Route path="/panel" component={Panel}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/profile" component={Profile}/> */}
            
  
          </div>
    )
}