import React from 'react';
import './Form.css';

class Form extends React.Component{
    render(){
        const {value, onChange, onKeyPress, onCreate, color}=this.props;

        return(
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
            </div>
        )
    }
}

export default Form;