import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div className="row all-form">
                <div className="col-md-12 all-inputs">
                    <input value={this.props.getValue("name")} onChange={(event)=>{
                        this.props.handleInput("name", event);
                    }} placeholder="Name"/>
                    <input value={this.props.getValue("location")} onChange={(event)=>{
                        this.props.handleInput("location", event);
                    }}  placeholder="Location"/>
                    <input value={this.props.getValue("price")} onChange={(event)=>{
                        this.props.handleInput("price", event);
                    }}  placeholder="Reward"/>
                    <input value={this.props.getValue("deadOrAlive")} onChange={(event)=>{
                        this.props.handleInput("deadOrAlive", event);
                    }}  placeholder="Dead or Alive"/>
                </div>
                <a className="col-md-offset-5 col-md-2 button" onClick={()=>{
                    this.props.addData(this.props.state);
                    this.props.reset();
                }}>
                    <div>Submit</div>
                </a>
            </div>
        );
    }

}

export default Form;