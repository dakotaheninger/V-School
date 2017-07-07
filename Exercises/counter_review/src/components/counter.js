/**
 * Created by dakotaheninger on 7/5/17.
 */
import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <h1>{this.props.counter}</h1>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleAdd();
                }}>Add
                </button>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleSub();
                }}>Subtract
                </button>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleMult();
                }}>Multiply by 2
                </button>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleDiv();
                }}>Divide by 2
                </button>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleSqrt();
                }}>Square root
                </button>
                <button style={this.props.buttonStyle} onClick={()=>{
                    this.props.handleReset();
                }}>Reset</button>
            </div>

        )

    }
}


export default Counter;