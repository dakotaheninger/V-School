/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import Blue from "../components/blue.js";
import Red from "../components/red.js";
import Line from "../components/line.js";
import autoBind from "react-autobind";

class Container extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            redScore: 100,
            blueScore: 100

        }
    }
    componentDidMount(){
        window.addEventListener("keypress", this.redKey);
        window.addEventListener("keypress", this.blueKey)
    }

    blueClick() {
        if (this.state.redScore == 1) {
            this.setState({
                ...this.state,
                redScore: 100,
                blueScore: 100
            })
        } else {
            this.setState({
                blueScore: this.state.blueScore + 1,
                redScore: this.state.redScore - 1
            })
        }
    }

    redClick() {
        if (this.state.blueScore == 1) {
            this.setState({
                ...this.state,
                blueScore: 100,
                redScore: 100
            })
        } else {
            this.setState({
                redScore: this.state.redScore + 1,
                blueScore: this.state.blueScore - 1
            })
        }
    }
    redKey(event){
        if(event.key == 1){
            this.redClick();
        }
    }
    blueKey(event){
        if(event.key == 0){
            this.blueClick();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Red handleRedClick={this.redClick} score={this.state.redScore}/>
                    <Blue handleBlueClick={this.blueClick} score={this.state.blueScore}/>
                </div>
                <div className="row">
                    <Line blueScore={this.state.blueScore} redScore={this.state.redScore}/>
                </div>
            </div>

        )
    }
}


export default Container;

