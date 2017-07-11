/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";

class Line extends React.Component{
    render(){
        let redStyle = {
            width: `${this.props.redScore * 5}`,
            border: "10px solid red",
            display: "inline-block"
        };
        let blueStyle = {
            width: `${this.props.blueScore * 5}`,
            border: "10px solid blue",
            display: "inline-block"
        };
        return(
           <div className="col-md-12 line">
               <div style={redStyle} className="red-line"></div>
               <div style={blueStyle} className="blue-line"></div>
           </div>
        )
    }
}


export default Line;