import React from 'react';
import TodoItem from './TodoItem.js';

class TodoItemList extends React.Component{
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        return this.props.todos!==nextProps.todos;
    }

    render(){
        const {todos, onToggle, onRemove}=this.props;

        const todoList=todos.map(
            ({id,text,checked,color})=>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={color}
                    key={id}
                />
            )
        )

        return(
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;