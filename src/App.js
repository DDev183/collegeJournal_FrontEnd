import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/layout/Header';
import About from './Components/Pages/About';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';
import axios from 'axios';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Registration from './Components/Pages/Registration';
import Login from './Components/Pages/Login';
import UnauthPanel from './Components/Panels/UnauthPanel';
import AuthPanel from './Components/Panels/AuthPanel';
import AuthHeader from './Components/layout/AuthHeader';
import Logout from './Components/Commands/Logout';
import { Chip } from '@material-ui/core';
import Profile from './Components/Pages/Profile';
import Panel from './Components/Panels/Panel';


class App extends Component {




  state = {
    todos: [],
    username: '',
    token: '',
    logging: false,
    username: '',
    firstname: '',
    lastname: '',
    middlename: '',
    role: '',
    email: '',
    banstate: '',
    telnumber: '',
    group: ''
  }


  componentDidMount() {
    this.changeLogging();
    this.getUser();

  }


  // async componentDidMount() {
  //     const response = await fetch('http://localhost:8080/api/teacher/createLesson/confirm', {
  //     headers : { 
  //       mode: 'no-cors',
  //      }});

  //     const body = await response.json();
  //     this.setState({ groups: body, isLoading: false });

  // }

  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  //Delete todo
  delTodo = (id) => {

    //Ofline
    // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});

    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }




  //Add todo
  addTodo = (title, author) => {

    //Offline
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   author,
    //   completed: false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))

  }


  getUser = () =>{



  var token = "Bearer_" + localStorage.getItem('token');

  

  const axiosConfig = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'mode': 'no-cors',
          'Authorization': token
      }
    };



    axios.get('http://localhost:8080/api/user/profile', axiosConfig)
    .then(response =>{
      console.log(response.data);




      this.setState({username: response.data.username});
      this.setState({firstname: response.data.firstname});
      this.setState({lastname: response.data.lastname});
      this.setState({middlename: response.data.middlename});
      this.setState({telnumber: response.data.telnumber});
      this.setState({role: response.data.role});
      this.setState({email: response.data.email});
      this.setState({banstate: response.data.banstate});
      this.setState({group: response.data.group});

      console.log("Username: " + response.data.username);
      console.log(response.status);

      if (this.state.role === "USER"){
        this.setState({role: "Студент"});
      }
      if (this.state.role === "TEACHER"){
        this.setState({role: "Преподаватель"});
      }
      if (this.state.role === "ADMIN"){
        this.setState({role: "Администратор"});
      }

      if(response.data.banstate === false){
        this.setState({banstate: "False"});
      } else {
        this.setState({banstate: "True"});
      }

    })
    .catch(response => {
      console.log("Error");
      console.log(response.data);
      console.log(response.status);
    })

  }


  changeLogging = () => {
      console.log("From localstorage: " + localStorage.getItem('token'));
      var loggingVar = localStorage.getItem('logging');
      console.log(loggingVar);

      if (loggingVar == "true"){
        this.setState({logging: true});
      } else {
        this.setState({logging: false});
        
      }
  }





  render() {


    


    if (this.state.logging == true){


      return (

        <Router>
        <div className="App">
          <div className="container-fluid">
          <div>
          <AuthHeader username={this.state.username} />
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
            <Route path="/panel" component={() => <Panel role={this.state.role} />}/>
            <Route path="/logout" component={() => <Logout login={this.changeLogging} />}/>
            <Route path="/profile" component={() => <Profile user={this.state} />} />


{/* 
            <Route path="/news" component={News} />
            <Route path="/panel" component={Panel}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/profile" component={Profile}/> */}
            
  
          </div>



{/* CODE!!! */}


  
          </div>
        </div>
        </Router>
      );

    } else {


    return (
      <Router>
      <div className="App">
        <div className="container-fluid">
          <UnauthPanel login={this.changeLogging} getUser={this.getUser}/>
          ne kek

        </div>
      </div>
      </Router>
    );
  }
}
}


export default App;
