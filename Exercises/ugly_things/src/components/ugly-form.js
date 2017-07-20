import React from "react";


class UglyForm extends React.Component {
    render() {
        return (
            <div className="row all-input">
                <div className="col-md-4 input">
                    <input onChange={(event)=>{
                        this.props.handleInput("title", event)
                    }} value={this.props.getValue("title")} placeholder="Title"/>
                </div>
                <div className="col-md-4 input">
                    <input onChange={(event)=>{
                        this.props.handleInput("backgroundImage", event)
                    }} value={this.props.getValue("backgroundImage")} placeholder="Image URL"/>
                </div>
                <div className="col-md-4 input">
                    <input onChange={(event)=>{
                        this.props.handleInput("description", event)
                    }} value={this.props.getValue("description")} placeholder="Description"/>
                </div>
                <div className="submit">
                    <a onClick={()=>{
                        this.props.handleSubmit(this.props.currentPic)
                    }} className="submit-button">Submit</a>
                </div>
            </div>

        );
    }

}


export default UglyForm;