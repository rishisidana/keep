import React , {Component} from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ul>{this.props.tasks.map(todo => <ToDo key={todo.id} todo={todo} removeFromToDoTasks={this.props.removeFromToDoTasks}/>)}</ul>
            </div>
        );
    }
}

export default ToDoList;