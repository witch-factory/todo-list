import React, {Component} from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from './components/Form.js';
import TodoItemList from './components/TodoItemList.js';
import Palette from "./components/Palette";

class App extends Component{
    id=3;
    state={
        input:'',
        todos:[
            {id:0,text: '체크리스트 1',checked:false},
            {id:1,text: '체크리스트 2',checked:true},
            {id:2,text: '체크리스트 3',checked:false},
        ],
        color:'#343a40'
    }

    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        });
    }

    handleCreate=()=>{
        const {input, todos, color}=this.state;
        this.setState({
            input:'',
            todos:todos.concat({
                id:this.id++,
                text:input,
                checked:false,
                color:color
            })
        })
    }

    handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            this.handleCreate();
        }
    }

    handleToggle=(id)=>{
        const{todos}=this.state;

        const index=todos.findIndex(todo=>todo.id===id);
        const selected=todos[index];
        const nextTodos=[...todos];

        nextTodos[index]={
            ...selected,
            checked:!selected.checked
        };
        this.setState({
            todos:nextTodos
        });
    }

    handleRemove=(id)=>{
        const {todos}=this.state;
        this.setState({
            todos:todos.filter(todo=>todo.id!==id)
        });
    }

    handleSelectColor=(color)=>{
        this.setState({color})
    }

  render(){
        const {input, todos, color}=this.state;
        const{handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove, handleSelectColor}=this;

        return (
            <TodoListTemplate form={
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                    color={color}
                />
            }
            palette={
                <Palette colors={['#343a40', '#f03e3e', '#12b886', '#228ae6']} selected={color} onSelect={handleSelectColor} />
            }
            >
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoListTemplate>
        )
      }
}

export default App;
