import React, {Component} from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from './components/Form.js';

class App extends Component{
  render(){
    return (
        <TodoListTemplate form={<Form />}>
            완성됨
        </TodoListTemplate>
    )
  }
}

export default App;
