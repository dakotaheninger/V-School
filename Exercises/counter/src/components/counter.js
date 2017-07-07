/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";

class Counter extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={()=>{
                    this.props.handleAdd();
                }}>Add</button>
                <button onClick={()=>{
                    this.props.handleSub();
                }}>Subtract</button>
            </div>
        )
    }
}


export default Counter;