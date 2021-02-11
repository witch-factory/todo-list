import React, {Component} from 'react';
import TodoItem from './TodoItem.js';

class TodoItemList extends React.Component{
    render(){
        const {todos, onToggle, onRemove}=this.props;

        return(
            <div>
                <TodoItem text="안녕" />
            </div>
        )
    }
}

export default TodoItemList;