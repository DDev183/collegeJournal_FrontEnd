import React, {Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component{
    render(){
            // <div>
            //     <h1>Test info</h1>
            // </div>
            return this.props.todos.map((todo) => (
                <div>
                    <TodoItem key={todo.id} todo={todo} 
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}
                    />
                </div>
            ));
    }
}

//PropType
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;