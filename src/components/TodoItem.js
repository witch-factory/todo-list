import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component{
    shouldComponentUpdate (nextProps, nextState, nextContext) {
        return this.props.checked!==nextProps.checked;
    }

    render(){
        const{text, checked, id, onToggle, onRemove, color}=this.props;

        return (
            <div className="todo-item" onClick={()=>onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation();
                    onRemove(id);}
                }>&times;</div>
                <div style={{color}} className={`todo-text ${checked ? ' checked':''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )

    }
}

export default TodoItem;