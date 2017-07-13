/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";






class Button extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handleAdd}>Add</button>
                <div>{this.props.counter}</div>
                <button onClick={this.props.handleSub}>Subtract</button>
            </div>
        )
    }
}


export default Button;