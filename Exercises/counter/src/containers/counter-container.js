/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import Counter from "../components/counter.js";
import autoBind from "react-autobind";

class CounterContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {counter: 0};
    }

    add() {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    subtract() {
        this.setState({
            counter: this.state.counter - 1
        });

    };

    render() {
        return (
            <Counter handleAdd={this.add} handleSub={this.subtract} counter={this.state.counter}/>
        )
    }
}


export default CounterContainer;