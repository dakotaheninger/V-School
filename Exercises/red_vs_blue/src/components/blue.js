/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";


class Blue extends React.Component{
    render(){
        return(
            <div className="col-md-offset-2 col-md-4 blue-main">
                <h1>Blue</h1>
                <h2>Score</h2>
                <a  onClick={()=>{
                    this.props.handleBlueClick();
                }} className="blue-score button">Score for Blue</a>
                <div className="score">{this.props.score}</div>
            </div>
        )
    }
}

export default Blue;