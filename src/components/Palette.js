import React from 'react';
import './Palette.css'

class Color extends React.Component{
    render() {
        const {color, active, onClick} = this.props;

        return (
            <div className={`color ${active?'active':''}`} onClick={onClick} style={{background: color}}>

            </div>
        )
    }
}

class Palette extends React.Component{
    render(){
        const{colors, selected, onSelect}=this.props;
        const colorList=colors.map(
            (color)=>(<Color color={color} active={selected===color} onClick={()=>onSelect(color)} key={color}/>)
        )

        return (
            <div className="palette">
                {colorList}
            </div>
        )
    }
}

export default Palette;