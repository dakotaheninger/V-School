import React from "react";


class Color extends React.Component {
    render() {
        let style = {
            backgroundColor: `#${this.props.lastColor}`,
            color: `#${this.props.thirdColor}`,
            border: `5px solid #${this.props.fourthColor}`
        };
        return (

            <div className="col-md-offset-3 col-md-6 center" style={{backgroundColor: `#${this.props.color}`}}>
                <div className="colorName">{this.props.name}</div>
                <a className="button" style={style} onClick={()=>{
                    this.props.click();
                }}>New Color</a>
            </div>
        );
    }

}


export default Color;