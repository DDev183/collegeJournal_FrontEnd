import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        //Add any fields from forms. eg. email, password, login and etc.
        title: '',
        author: ''
    }

    //If fields changed, it's function will be run
    onChange = (e) => this.setState( {[e.target.name]: e.target.value} );


    onSubmit = (e) => {

        const {title, author} = this.state;

        e.preventDefault();
        this.props.addTodo(title, author);
        this.setState({title: ''});
        this.setState({author: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{dislay: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add todo..."
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="author" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Author"
                    value={this.state.author} 
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style = {{flex: '1'}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}


export default AddTodo
