/**
 * Created by dakotaheninger on 7/17/17.
 */
import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div>
                <input onChange={(event)=>{
                    this.props.handleInput("name1", event)
                }} value={this.props.getValue("name1")}/>
                <input onChange={(event)=>{
                    this.props.handleInput("name2", event)
                }} value={this.props.getValue("name2")}/>
                <input onChange={(event)=>{
                    this.props.handleInput("name3", event)
                }} value={this.props.getValue("name3")}/>
                <a onClick={()=>{
                    this.props.submit();
                }}>Submit</a>
            </div>
        );
    }

}

export default Form;