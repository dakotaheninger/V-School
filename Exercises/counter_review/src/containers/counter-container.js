/**
 * Created by dakotaheninger on 7/5/17.
 */
import React from "react";
import Counter from "../components/counter.js";
import autoBind from "react-autobind";

class CounterContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            counter: 0,
            style: {
                fontSize: "30px",
                textAlign: "center",
                paddingBottom: "10vh"
            },
            buttonStyle: {
                fontSize: "30px",
                color: "cadetblue",
                backgroundColor: "yellow"

            }
        };
    }

    add() {
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                color: "yellow",
                backgroundColor: "cadetblue"
            }

        });

    };

    subtract() {
        this.setState({
            counter: this.state.counter - 1,
            style: {
                ...this.state.style,
                color: "cadetblue",
                backgroundColor: "yellow"
            }
        });

    };

    multiply() {
        this.setState({
            counter: this.state.counter * 2,
            style: {
                ...this.state.style,
                color: "white",
                backgroundColor: "black"
            }
        })
    }

    divide() {
        this.setState({
            counter: this.state.counter / 2,
            style: {
                ...this.state.style,
                color: "black",
                backgroundColor: "white"
            }
        })
    }

    squareRoot() {
        this.setState({
            counter: Math.floor(Math.sqrt(this.state.counter)),
            style: {
                ...this.state.style,
                color: "red",
                backgroundColor: "blue"
            }
        })
    }
    reset(){
        this.setState({
            counter: 0,
            style: {
                ...this.state.style,
                color: "blue",
                backgroundColor: "red"
            }
        })
    }

    render() {
        return (
            <Counter style={this.state.style} buttonStyle={this.state.buttonStyle} handleAdd={this.add} handleSub={this.subtract} handleMult={this.multiply} handleDiv={this.divide}
                     handleSqrt={this.squareRoot} handleReset={this.reset} counter={this.state.counter}/>
        )
    }
}


export default CounterContainer;