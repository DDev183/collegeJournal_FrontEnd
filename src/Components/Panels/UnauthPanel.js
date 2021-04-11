import React from 'react';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import Header from '../layout/Header';
import About from '../Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';




class UnauthPanel extends React.Component {

render(){
    return (

        <div>
          <Header />
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
  

            <Route path="/about" component={About} />
            <Route path="/registration" component={() => <Registration login={this.props.login} getUser={this.props.getUser}/>}/>
            <Route path="/login" component={() => <Login login={this.props.login} getUser={this.props.getUser}/>}/>


            
  
          </div>
    )
          }
}


export default UnauthPanel;
