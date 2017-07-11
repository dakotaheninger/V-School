/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";


class Red extends React.Component {
    render() {
        return (
            <div className="col-md-offset-2 col-md-4 red-main">
                <h1>Red</h1>
                <h2>Score</h2>
                <a onClick={()=>{
                    this.props.handleRedClick();
                }} className="red-score button">Score for Red</a>
                <div className="score">{this.props.score}</div>
            </div>
        )
    }
}


export default Red;